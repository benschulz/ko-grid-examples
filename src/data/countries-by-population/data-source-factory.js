'use strict';

define(['ko-data-source', 'json!./data.json'], function (dataSource, data) {
    return function () {
        var idSelector = function (e) { return e.id; };

        var observableStateTransitioner = new dataSource.DefaultObservableStateTransitioner(
            'id', 'rank', 'country', 'country', 'countryArticle', 'population', 'date', 'percentage');
        var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
        var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

        clientSideDataSource.addEntries(data.map(function (e) {
            return {
                id: e.id,
                rank: e.rank,
                country: e.country,
                countryArticle: e.countryArticle,
                population: e.population,
                date: new Date(e.date),
                percentage: e.percentage
            };
        }));

        return clientSideDataSource;
    };
});
