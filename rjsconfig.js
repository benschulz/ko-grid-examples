require.config({
  baseUrl: ""+(function(s) { return s.substring(0, s.length - 12) + '../'; })(document.querySelector('script[src$="rjsconfig.js"]').src)+"",
  paths: {
  "text": "node_modules/requirejs-plugins/lib/text",
  "json": "node_modules/requirejs-plugins/src/json",
  "domReady": "node_modules/domReady/domReady",
  "moment": "bower_components/moment/moment",
  "es6-promise": "bower_components/es6-promise/promise.min",
  "knockout": "bower_components/knockout/dist/knockout",
  "ko-grid-bundle": "bower_components/ko-grid-bundle/dist/ko-grid-bundle",
  "ko-grid": "empty:",
  "ko-data-source": "empty:",
  "stringifyable": "bower_components/stringifyable/dist/stringifyable"
},
  map: { '*': { 'req': 'require' } },
  packages: [
  {
    "name": "aggregation-basic-config",
    "location": "src/configs",
    "main": "aggregation-basic-config"
  },
  {
    "name": "aggregation-filtering-config",
    "location": "src/configs",
    "main": "aggregation-filtering-config"
  },
  {
    "name": "column-resizing-basic-config",
    "location": "src/configs",
    "main": "column-resizing-basic-config"
  },
  {
    "name": "column-scaling-basic-config",
    "location": "src/configs",
    "main": "column-scaling-basic-config"
  },
  {
    "name": "column-scaling-resize-detection-config",
    "location": "src/configs",
    "main": "column-scaling-resize-detection-config"
  },
  {
    "name": "css-nudity-config",
    "location": "src/configs",
    "main": "css-nudity-config"
  },
  {
    "name": "default-config",
    "location": "src/configs",
    "main": "default-config"
  },
  {
    "name": "export-basic-config",
    "location": "src/configs",
    "main": "export-basic-config"
  },
  {
    "name": "export-filtering-sorting-config",
    "location": "src/configs",
    "main": "export-filtering-sorting-config"
  },
  {
    "name": "filtering-basic-config",
    "location": "src/configs",
    "main": "filtering-basic-config"
  },
  {
    "name": "full-screen-basic-config",
    "location": "src/configs",
    "main": "full-screen-basic-config"
  },
  {
    "name": "full-screen-column-resizing-config",
    "location": "src/configs",
    "main": "full-screen-column-resizing-config"
  },
  {
    "name": "full-screen-column-scaling-config",
    "location": "src/configs",
    "main": "full-screen-column-scaling-config"
  },
  {
    "name": "large-data-set-config",
    "location": "src/configs",
    "main": "large-data-set-config"
  },
  {
    "name": "links-basic-config",
    "location": "src/configs",
    "main": "links-basic-config"
  },
  {
    "name": "remote-aggregate-config",
    "location": "src/configs",
    "main": "remote-aggregate-config"
  },
  {
    "name": "remote-basic-config",
    "location": "src/configs",
    "main": "remote-basic-config"
  },
  {
    "name": "remote-virtualization-config",
    "location": "src/configs",
    "main": "remote-virtualization-config"
  },
  {
    "name": "sorting-basic-config",
    "location": "src/configs",
    "main": "sorting-basic-config"
  },
  {
    "name": "virtualization-basic-config",
    "location": "src/configs",
    "main": "virtualization-basic-config"
  },
  {
    "name": "configs/config-factory",
    "location": "src/configs",
    "main": "config-factory"
  },
  {
    "name": "ko-grid-examples",
    "location": "src",
    "main": "bootstrap"
  },
  {
    "name": "onefold-js",
    "location": "bower_components/ko-grid-bundle/bower_components/onefold-js/src",
    "main": "internal"
  },
  {
    "name": "onefold-lists",
    "location": "bower_components/ko-grid-bundle/bower_components/onefold-lists/src",
    "main": "internal"
  },
  {
    "name": "indexed-list",
    "location": "bower_components/ko-grid-bundle/bower_components/indexed-list/src",
    "main": "indexed-list"
  },
  {
    "name": "stringifyable",
    "location": "bower_components/ko-grid-bundle/bower_components/stringifyable/src",
    "main": "internal"
  },
  {
    "name": "ko-data-source",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-virtualization/bower_components/ko-data-source/src",
    "main": "ko-data-source"
  },
  {
    "name": "onefold-dom",
    "location": "bower_components/ko-grid-bundle/bower_components/onefold-dom/src",
    "main": "internal"
  },
  {
    "name": "ko-indexed-repeat",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-indexed-repeat/src",
    "main": "binding"
  },
  {
    "name": "ko-grid",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-virtualization/bower_components/ko-grid/src",
    "main": "binding"
  },
  {
    "name": "ko-grid-aggregate",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-aggregate/src",
    "main": "aggregate"
  },
  {
    "name": "ko-grid-column-sizing",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-column-width-persistence/bower_components/ko-grid-column-sizing/src",
    "main": "column-sizing"
  },
  {
    "name": "ko-grid-column-resizing",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-column-scaling/bower_components/ko-grid-column-resizing/src",
    "main": "column-resizing"
  },
  {
    "name": "ko-grid-view-modes",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-view-state-storage/bower_components/ko-grid-view-modes/src",
    "main": "view-modes"
  },
  {
    "name": "ko-grid-view-state-storage",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-view-state-storage/src",
    "main": "view-state-storage"
  },
  {
    "name": "ko-grid-column-scaling",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-column-scaling/src",
    "main": "column-scaling"
  },
  {
    "name": "ko-grid-column-width-persistence",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-column-width-persistence/src",
    "main": "column-width-persistence"
  },
  {
    "name": "ko-grid-export",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-export/src",
    "main": "export"
  },
  {
    "name": "ko-grid-filtering",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-filtering/src",
    "main": "filtering"
  },
  {
    "name": "ko-grid-full-screen",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-full-screen/src",
    "main": "full-screen"
  },
  {
    "name": "ko-grid-links",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-links/src",
    "main": "links"
  },
  {
    "name": "ko-grid-resize-detection",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-resize-detection/src",
    "main": "resize-detection"
  },
  {
    "name": "ko-grid-sorting",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-sorting/src",
    "main": "sorting"
  },
  {
    "name": "ko-grid-toolbar",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-toolbar/src",
    "main": "toolbar"
  },
  {
    "name": "ko-grid-virtualization",
    "location": "bower_components/ko-grid-bundle/bower_components/ko-grid-virtualization/src",
    "main": "virtualization"
  },
  {
    "name": "ko-grid-bundle",
    "location": "bower_components/ko-grid-bundle/src",
    "main": "bundle"
  },
  {
    "name": "data",
    "location": ""+(function(s) { return s.substring(0, s.length - 12) + '../'; })(document.querySelector('script[src$="rjsconfig.js"]').src)+"./src/data",
    "main": "whatever"
  }
]
});

require(['ko-grid-examples']);
