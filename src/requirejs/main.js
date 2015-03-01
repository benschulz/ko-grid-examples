'use strict';

define('ko-grid', ['ko-grid-bundle'], function (bundle) { return bundle.grid;});
define('ko-data-source', ['ko-grid-bundle'], function (bundle) { return bundle.dataSource;});

require(['ko-grid-examples']);
