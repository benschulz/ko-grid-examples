'use strict';

define(['moment', 'ko-grid-bundle'], function (moment) {
    function defaultCellValueRenderer(value) {
        if (value === null)
            return '';

        if (typeof value === 'object' && Object.getPrototypeOf(value).constructor === Date
            && !value.getUTCHours() && !value.getUTCMinutes() && !value.getUTCSeconds() && !value.getUTCMilliseconds())
            return moment(value).format(value.getUTCDate() === 1 ? value.getUTCMonth() === 0 ? 'YYYY' : 'MMMM YYYY' : 'MMMM D, YYYY');

        if (typeof value === 'number')
            if (Math.abs(value) >= 1)
                return value.toLocaleString();
            else {
                var firstNonZeroFractionDigit = -Math.floor(Math.log(value) / Math.log(10));
                return value.toLocaleString(undefined, {
                    maximumFractionDigits: firstNonZeroFractionDigit + 1
                });
            }

        return '' + value;
    }

    var configs = window.ko
        ? window.ko.bindingHandlers.grid.config = window.ko.bindingHandlers.grid.config || {}
        : {};

    return configs['ko-grid-sample-config'] = {
        cellValueRenderer: function (column, value) {
            var rendered = defaultCellValueRenderer(value);
            return column.id === 'percentage' ? rendered + ' %' : rendered;
        },
        extensions: {
            aggregate: {},
            links: {},
            sorting: {}
        }
    };
});
