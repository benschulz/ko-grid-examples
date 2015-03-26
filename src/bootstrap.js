define([
        'domReady',
        'knockout',
        './data/countries-by-population/data-source-factory',
        './example',
        'ko-grid-bundle'
    ],
    function (domReady, ko, countriesByPopulation) {
        domReady(function () {
            ko.applyBindings({
                countriesByPopulation: countriesByPopulation
            });
        });
    }
);
