'use strict';

define(['knockout', 'ko-data-source', 'stringifyable'], function (ko, dataSource, stringifyable) {
    var stringifyReplacer = function (key, value) {
        if (value === Number.POSITIVE_INFINITY)
            return 'Number.POSITIVE_INFINITY';

        return stringifyable.stringifyReplacer(key, value);
    };

    return function (args) {
        var idProperty = args.id || 'id';
        var observableProperties = args.observableProperties;
        var numericProperties = args.numericProperties || [];

        var idSelector = function (e) { return e[idProperty]; };
        var observableStateTransitioner = new dataSource.DefaultObservableStateTransitioner({observableProperties: observableProperties});

        var clientSideDatSourceFactory = function () {
            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

            args.entries().then(function (entries) {
                clientSideDataSource.addEntries(entries);
            });

            return clientSideDataSource;
        };

        clientSideDatSourceFactory.remote = function (options) {
            options = options || {};
            var io = options.io || {
                    logRequest: function (r) { window.console.log('Mock Server Request: ', r); },
                    logResponse: function (r) { window.console.log('Mock Server Response: ', r); }
                };

            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            var querier = {
                issue: function (query) {
                    io.logRequest(JSON.stringify({
                        predicate: query.predicate,
                        comparator: query.comparator,
                        offset: query.offset,
                        limit: query.limit,
                    }, stringifyReplacer, '  '));

                    return args.entries().then(function (entries) {
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

                                io.logResponse(JSON.stringify(result, stringifyReplacer, '  '));

                                result.values = dataSource.streams.streamArray(clipped);
                                resolve(result);
                            }, options.latency || 500);
                        });
                    });
                }
            };
            return new dataSource.ServerSideDataSource(idSelector, querier, observables);
        };

        return clientSideDatSourceFactory;
    };
});
