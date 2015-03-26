define([
        'domReady',
        'es6-promise',
        'knockout',
        './data/countries-by-population/data-source-factory',
        './example',
        'ko-grid-bundle'
    ],
    function (domReady, es6promise, ko, countriesByPopulation) {
        es6promise.polyfill();

        domReady(function () {
            ko.applyBindings({
                countriesByPopulation: countriesByPopulation
            });
        });
    }
);
