'use strict';

define(['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        selection: {
            evaluateRowClicks: true
        }
    });
});
