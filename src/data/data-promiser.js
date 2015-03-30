'use strict';

define(function () {
    return function (moduleSpec, mapper) {
        return function () {
            return new Promise(function (resolve, reject) {
                require([moduleSpec], function (data) {
                    resolve(data);
                }, reject);
            }).then(function (x) {
                    return mapper ? x.map(mapper) : x;
                });
        };
    };
});
