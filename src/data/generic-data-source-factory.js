'use strict';

define(['knockout', 'ko-data-source', 'stringifyable'], function (ko, dataSource, stringifyable) {
    return function (args) {
        var entriesPromiser = args.entries;
        var idProperty = args.id || 'id';
        var observableProperties = args.properties;
        var numericProperties = args.numericProperties || [];

        var idSelector = function (e) { return e[idProperty]; };
        var observableStateTransitioner = new (dataSource.DefaultObservableStateTransitioner.bind.apply(dataSource.DefaultObservableStateTransitioner, observableProperties));

        var clientSideDatSourceFactory = function () {
            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

            entriesPromiser().then(function (entries) {
                clientSideDataSource.addEntries(entries);
            });

            return clientSideDataSource;
        };

        clientSideDatSourceFactory.remote = function (options) {
            var entries = [];
            entriesPromiser().then(function (es) {
                // well.. this ain't pretty
                entries = es;
                Array.prototype.slice.call(document.querySelectorAll('.ko-grid')).forEach(function (grid) {
                    ko.contextFor(grid).grid.data.predicates.valueHasMutated();
                });
            });

            options = options || {};
            var io = options.io || {
                    logRequest: function (r) { window.console.log('Mock Server Request: ', r); },
                    logResponse: function (r) { window.console.log('Mock Server Response: ', r); }
                };

            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            return new dataSource.ServerSideDataSource(idSelector, observables, {
                issue: function (query) {
                    io.logRequest(JSON.stringify({
                        predicate: query.predicate,
                        comparator: query.comparator,
                        offset: query.offset,
                        limit: query.limit,
                    }, stringifyable.stringifyReplacer, '  '));

                    return new Promise(function (resolve) {
                        window.setTimeout(function () {
                            var matching = entries.filter(query.predicate);
                            matching.sort(query.comparator);
                            var clipped = matching.slice(query.offset, query.offset + query.limit);

                            var result = {
                                unfilteredSize: entries.length,
                                filteredSize: matching.length,
                                values: clipped
                            };

                            if (options.computeStatistics) {
                                var statistics = {};
                                numericProperties.forEach(function (p) {
                                    statistics[p] = {'minimum': Number.POSITIVE_INFINITY, 'maximum': Number.NEGATIVE_INFINITY, 'sum': 0}
                                });
                                matching.forEach(function (e) {
                                    numericProperties.forEach(function (p) {
                                        var propertyStatistics = statistics[p];
                                        var v = e[p];
                                        propertyStatistics['minimum'] = Math.min(propertyStatistics['minimum'], v);
                                        propertyStatistics['maximum'] = Math.max(propertyStatistics['maximum'], v);
                                        propertyStatistics['sum'] += v;
                                    });
                                });

                                result.statistics = statistics;
                            }

                            io.logResponse(JSON.stringify(result, stringifyable.stringifyReplacer, '  '));

                            result.values = dataSource.streams.streamArray(clipped);
                            resolve(result);
                        }, options.latency || 500);
                    });
                }
            });
        };

        return clientSideDatSourceFactory;
    };
});