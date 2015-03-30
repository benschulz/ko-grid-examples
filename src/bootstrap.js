define([
        'domReady',
        'es6-promise',
        'knockout',
        './data/countries-by-population',
        './data/unicode-characters',
        './example',
        'ko-grid-bundle'
    ],
    function (domReady, es6promise, ko, countriesByPopulation, unicodeCharacters) {
        es6promise.polyfill();

        domReady(function () {
            ko.applyBindings({
                countriesByPopulation: countriesByPopulation,
                unicodeCharacters: unicodeCharacters
            });
        });
    }
);
