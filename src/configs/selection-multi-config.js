'use strict';

define(['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        filtering: {},
        selection: {
            allowMultiSelection: true,
            evaluateRowClicks: true
        }
    });
});
