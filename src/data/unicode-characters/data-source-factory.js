'use strict';

define(['ko-data-source', 'json!./data.json'], function (dataSource, data) {
    return function () {
        var idSelector = function (e) { return e.id; };

        var observableStateTransitioner = new dataSource.DefaultObservableStateTransitioner('id', 'character', 'name', 'block', 'htmlEntities');
        var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
        var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

        clientSideDataSource.addEntries(data);

        return clientSideDataSource;
    };
});
