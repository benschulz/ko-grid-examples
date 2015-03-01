define(['knockout', 'ko-grid-bundle', './data/countries-by-population/data-source-factory', './example'],
    function (ko, bundle, countriesByPopulation) {
        ko.applyBindings({
            countriesByPopulation: countriesByPopulation
        });
    }
);
