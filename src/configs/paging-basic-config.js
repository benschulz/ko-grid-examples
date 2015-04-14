'use strict';

define(['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        paging: {pageSize: 20},
        toolbar: {}
    });
});
