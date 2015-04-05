'use strict';

define(['./generic-data-source-factory', './data-promiser'], function (genericDataSourceFactory, dataPromiser) {
    return genericDataSourceFactory({
        entries: dataPromiser('json!data/unicode-characters.json'),
        observableProperties: []
    });
});
