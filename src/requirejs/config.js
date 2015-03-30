'use strict';

var baseUrl = (function (s) { return s.substring(0, s.length - 10); })(document.querySelector('script[src$="require.js"]').src);

require.config({
    baseUrl: baseUrl,
    packages: [
        {
            "name": "data",
            "location": baseUrl + "data",
            "main": "whatever"
        }]
});
