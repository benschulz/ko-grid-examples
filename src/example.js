'use strict';

define(['knockout', 'json!dist/examples/examples.json'], function (ko, examples) {
    var document = window.document;
    var createElement = function (tagName) {
        var element = window.document.createElement(tagName);
        Array.prototype.slice.call(arguments, 1).forEach(function (child) {
            element.appendChild(typeof child === 'string' ? createTextNode(child) : child);
        });
        return element;
    };
    var createTextNode = window.document.createTextNode.bind(window.document);

    function merge(a, b) {
        var result = {};
        Object.keys(a).forEach(function (k) { result[k] = a[k]; });
        Object.keys(b).forEach(function (k) { result[k] = b[k]; });
        return result;
    }

    function isCategory(element) {
        return !!element.elements;
    }

    function isSelected(example) {
        var pathname = window.location.pathname;
        return pathname.indexOf(example.path, pathname.length - example.path.length) >= 0;
    }

    function addPaths(prefix, elements) {
        return elements.map(function (element) {
            return isCategory(element)
                ? merge(element, {elements: addPaths(prefix + encodeURIComponent(element.title) + '/', element.elements)})
                : merge(element, {path: prefix + element.filename});
        });
    }

    examples = addPaths('', examples);

    ko.bindingHandlers.koGridExample = {
        init: function (element, valueAccessor) {
            var uriPrefix = valueAccessor();

            var navigation = createElement('nav');
            navigation.id = 'example-navigation';
            var heading = createElement('h2');
            navigation.appendChild(heading);
            heading.appendChild(createTextNode('Examples'));

            createCategoryBody(navigation, uriPrefix, examples);

            element.appendChild(navigation);
        },
        update: function () {}
    };

    function createCategoryBody(parent, uriPrefix, elements) {
        var navigationEntries = createElement('ul');
        navigationEntries.className = 'example-navigation-entries';

        elements.forEach(function (element) {
            var navigationEntry = createElement('li');
            navigationEntries.appendChild(navigationEntry);

            if (isCategory(element)) {
                var heading = createElement('h3');
                heading.appendChild(createTextNode(element.title));
                navigationEntry.appendChild(heading);

                createCategoryBody(navigationEntry, uriPrefix, element.elements);
            } else {
                navigationEntry.className = (isSelected(element) ? 'selected ' : '') + 'example-navigation-entry';

                var anchor = createElement('a');
                anchor.appendChild(createTextNode(element.title));
                anchor.href = uriPrefix + 'examples/' + element.path;

                navigationEntry.appendChild(anchor);
            }
        });

        parent.appendChild(navigationEntries);
    }

    var cranks = {
        'css-nudity': function (element) {
            var label = createElement('label');
            var checkbox = createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = false;

            label.appendChild(checkbox);
            label.appendChild(createTextNode(' CSS nudity'));

            element.appendChild(label);

            var affectedElements = Array.prototype.slice.call(document.head.querySelectorAll('.ko-grid-styles'));
            checkbox.addEventListener('change', function () {
                affectedElements.forEach(function (e) {
                    if (checkbox.checked)
                        document.head.removeChild(e);
                    else
                        document.head.appendChild(e);
                });
            });
        },
        'fixed-height': function (element) {
            var checkbox = createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = document.querySelector('.grid').classList.contains('fixed-height');

            var label = createElement('label',
                checkbox, ' ', createElement('code', '.fixed-height'));

            element.appendChild(label);

            checkbox.addEventListener('change', function () {
                if (checkbox.checked)
                    document.querySelector('.grid').classList.add('fixed-height');
                else
                    document.querySelector('.grid').classList.remove('fixed-height');
            });
        },
        'relayout': function (element) {
            var button = createElement('button', 'Recalculate Layout');
            element.appendChild(button);

            button.addEventListener('click', function () {
                ko.contextFor(document.querySelector('.ko-grid')).grid.layout.recalculate();
            });
        }
    };

    ko.bindingHandlers.koGridExampleCranks = {
        init: function (element, valueAccessor) {
            element.classList.add('cranks');
            valueAccessor().forEach(function (crank) {
                cranks[crank](element);
            })
        },
        update: function () {}
    };
});
