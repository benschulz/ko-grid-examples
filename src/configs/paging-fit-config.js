'use strict';

define(['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        heightAdjuster: {},
        paging: {
            pageSize: 'fit'
        },
        resizeDetection: {},
        toolbar: {},
        viewModes: {},
        viewStateStorage: {}
    });
});
