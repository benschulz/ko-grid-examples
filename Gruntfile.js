'use strict';

module.exports = function (grunt) {
    var fs = require('fs'),
        glob = require('glob'),
        Highlighter = require("highlights"),
        mkdirp = require('mkdirp'),
        path = require('path'),
        repeat = require('repeat-string');

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('generate-examples', function (mode) {
        var sourceDirectory = 'src/examples';
        var destinationDirectory = 'dist/examples';
        var examplesJsonFile = path.join(destinationDirectory, 'examples.json');

        var categories = order(sourceDirectory, fs.readdirSync(sourceDirectory)
            .filter(function (n) {
                return fs.statSync(path.join(sourceDirectory, n)).isDirectory();
            }));

        var examples = generateExampleCategory(sourceDirectory, destinationDirectory, 1, mode);
        categories.forEach(function (c) {
            examples.push({
                title: c,
                elements: generateExampleCategory(path.join(sourceDirectory, c), path.join(destinationDirectory, c), 2, mode)
            });
        });

        fs.writeFileSync(examplesJsonFile, JSON.stringify(examples, null, '  '));
    });

    function order(directory, names) {
        var copy = names.slice();
        var orderFile = path.join(directory, 'order.json');
        var order = fs.existsSync(orderFile) ? JSON.parse(fs.readFileSync(orderFile, 'utf8')) : [];

        copy.sort(function (a, b) { // preserve order
            var aIndex = order.indexOf(a),
                bIndex = order.indexOf(b),
                lastIndex = order.length;
            return (aIndex >= 0 ? aIndex : lastIndex) - (bIndex >= 0 ? bIndex : lastIndex);
        });

        return copy;
    }

    function generateExampleCategory(sourceDirectory, destinationDirectory, depth, mode) {
        var examples = [];

        var filenames = order(sourceDirectory, glob.sync(path.join(sourceDirectory, '*.html'))
            .filter(function (p) { return fs.statSync(p).isFile(); })
            .map(path.basename));

        grunt.verbose.writeln('XXX: ' + filenames.join(', '));

        mkdirp.sync(destinationDirectory);
        return filenames.map(function (filename) {
            grunt.verbose.subhead('Generating `' + path.join(destinationDirectory, filename) + '` from `' + path.join(sourceDirectory, filename) + '`.');

            var content = fs.readFileSync(path.join(sourceDirectory, filename), 'utf8');

            var hasDoctype = !!/^<!DOCTYPE html>/.exec(content);
            var hasHead = !!/<head[^>]*>[\s\S]*<\/head>/i.exec(content);
            var hasBody = !!/<body[^>]*>[\s\S]*<\/body>/i.exec(content);

            var wrap = !(hasDoctype || hasHead || hasBody);
            var yes = '(yes)';
            var no = '(no)';
            if (!wrap && !(hasDoctype && hasHead && hasBody)) // sanity check
                throw new Error('Invalid state: Make sure `' + filename + '` either has a doctype' + (hasDoctype ? yes : no) + ', '
                + 'head' + (hasHead ? yes : no) + ' and body' + (hasBody ? yes : no) + ' or none of them.');

            var titleInHeading = /<h1[^>]*>([\s\S]*)<\/h1>/i.exec(content)[1];
            var expectedTitle = titleInHeading + ' &mdash; Examples &mdash; ko-grid';

            if (wrap) {
                content = [
                    '<!DOCTYPE html>',
                    '<html>',
                    '<head lang="en">',
                    '    <meta charset="UTF-8">',
                    '    <title>' + expectedTitle + '</title>',
                    '',
                    '    <script type="text/javascript" src="' + repeat('../', depth) + 'require.js"></script>',
                    '    <script type="text/javascript" src="' + repeat('../', depth) + 'ko-grid-examples.js"></script>',
                    '    <link rel="stylesheet" href="' + repeat('../', depth) + 'ko-grid-examples.css">',
                    '    <link class="ko-grid-styles" rel="stylesheet" href="' + repeat('../', depth) + 'ko-grid-tweaks.css">',
                    '    <link class="ko-grid-styles" rel="stylesheet" href="' + repeat('../', depth) + 'ko-grid-bundle.css">',
                    '</head>',
                    '<body data-bind="koGridExample: \'' + repeat('../', depth) + '\'">',
                    content,
                    '</body>',
                    '</html>'
                ].join('\n');
            } else {
                var title = /<title[^>]*>([\s\S]*)<\/title>/i.exec(content)[1];
                if (title && title !== titleInHeading && title !== expectedTitle)
                    grunt.warn('Title and heading (h1) of `' + filename + '` do not match. Simply clear the title (<title></title>)');
                content = content.replace(/<title[^>]*>([\s\S]*)<\/title>/i, '<title>' + expectedTitle + '</title>');
            }

            var highlighter = new Highlighter();
            content = content.replace(/(<code[^>]*>)([^<]+)<\/code>/g, function (match, openingTag, code) {
                code = code.replace(/^(\s*)(\n|\r)/, '').replace(/(\n|\r)(\s*)$/, '');

                if (/^[a-zA-Z][_a-zA-Z0-9]*$/.exec(code)) // single words are not interesting
                    return match;

                grunt.verbose.writeln('Highlighting code: ' + (code.length > 50 ? code.substring(0, 49) + '…' : code));
                var highlighted = highlighter.highlightSync({fileContents: code, scopeName: 'source.js'});
                highlighted = /^<pre[^>]*>([\s\S]*)<\/pre>$/.exec(highlighted)[1];
                highlighted = highlighted.match(/<div\s([^>]*\s)?class="([^"]*\s)?line(\s[^"]*)?"[^>]*>/g).length === 1
                    ? /^<div\s([^>]*\s)?class="([^"]*\s)?line(\s[^"]*)?"[^>]*>([\s\S]*)<\/div>$/.exec(highlighted)[4]
                    : highlighted;

                return openingTag + highlighted + '</code>';
            });

            if (mode === 'development')
                content = content.replace(/<\/body>/i, '<script type="text/javascript" src="//localhost:35729/livereload.js"></script>\n</body>');

            fs.writeFileSync(path.join(destinationDirectory, filename), content);

            return {
                title: titleInHeading,
                filename: filename
            };
        });
    }

    grunt.registerTask('generate-index', function () {
        var content = fs.readFileSync('dist/examples/index.html', 'utf8');
        fs.writeFileSync('dist/index.html', content.replace(/("|')\.\.\//g, function (match, quote) { return quote; }));
    });

    grunt.registerTask('default', ['bower:install', 'generate-examples:development', 'generate-index', 'copy', 'less', 'requirejs', 'watch']);
    grunt.registerTask('build', ['bower:install', 'generate-examples', 'generate-index', 'copy', 'less', 'requirejs']);

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        copy: {
            dependencies: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/knockout/dist/knockout.js',
                    'bower_components/ko-grid-bundle/dist/ko-grid-bundle.css',
                    'bower_components/ko-grid-bundle/dist/ko-grid-bundle.js',
                    'bower_components/requirejs/require.js'
                ],
                dest: 'dist/'
            }
        },
        less: {
            default: {
                options: {paths: ['node_modules/atom-light-syntax/styles/']},
                files: {
                    'dist/ko-grid-examples.css': [
                        'bower_components/normalize-css/normalize.css',
                        'src/less/examples.less',
                        'node_modules/atom-light-syntax/index.less'],
                    'dist/ko-grid-tweaks.css': 'src/less/ko-grid-tweaks.less'
                }
            }
        },
        requirejs: {
            default: {
                options: {
                    baseUrl: '.',
                    name: 'ko-grid-examples',
                    out: 'dist/ko-grid-examples.js',
                    include: ['ko-grid-sample-config'],
                    insertRequire: ['ko-grid-sample-config'],
                    stubModules: ['text', 'json'],
                    paths: {
                        text: 'node_modules/requirejs-plugins/lib/text',
                        json: 'node_modules/requirejs-plugins/src/json',
                        knockout: 'bower_components/knockout/dist/knockout',
                        'ko-grid-sample-config': 'src/configs/ko-grid-sample-config',
                        'ko-grid-bundle': 'bower_components/ko-grid-bundle/dist/ko-grid-bundle',
                        'ko-grid': 'empty:',
                        'ko-data-source': 'empty:',
                        moment: 'bower_components/moment/moment'
                    },
                    packages: [{
                        name: 'ko-grid-examples',
                        location: 'src',
                        main: 'bootstrap'
                    }],
                    optimize: 'none',
                    normalizeDirDefines: 'all',
                    wrap: {
                        startFile: ['src/requirejs/config.js', 'src/requirejs/no-requirejs-stub-defines.js'],
                        endFile: ['src/requirejs/main.js']
                    }
                }
            }
        },
        watch: {
            options: {livereload: true},
            js: {files: ['src/**/*.js'], tasks: ['requirejs']},
            examples: {files: ['src/examples/**'], tasks: ['generate-examples:development', 'generate-index']},
            less: {files: ['src/**/*.less'], tasks: ['less']}
        }
    });
};
