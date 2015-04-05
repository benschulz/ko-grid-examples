'use strict';

define(['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        cellNavigation: {},
        editing: function (_, gridBindingValue) {
            return {
                createEditor: function (row, column) {
                    var element = window.document.createElement('input');
                    element.type = 'text';
                    var originalValue = column.renderValue(ko.unwrap(row[column.property]));
                    element.value = originalValue;

                    return {
                        get element() {
                            return element;
                        },
                        get value() {
                            return element.value;
                        },
                        set value(newValue) {
                            element.value = newValue;
                        },
                        get valueChanged() {
                            return this.value !== originalValue;
                        },

                        activate: function () {
                            this.focus();
                            element.setSelectionRange(0, element.value.length);
                        },
                        focus: function () {
                            element.focus();
                        },
                        reset: function () {
                            this.value = originalValue;
                        }
                    };
                },
                saveChange: function (row, column, newValue) {
                    var updated = {};
                    Object.keys(row).forEach(function (k) {
                        updated[k] = ko.unwrap(row[k]);
                    });
                    updated[column.property] = newValue;
                    gridBindingValue.dataSource.updateEntries([updated]);
                }
            };
        }
    });
});
