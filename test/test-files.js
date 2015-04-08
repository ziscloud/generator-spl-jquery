/*global describe, beforeEach, it, after, require, __dirname*/
'use strict';

var assert = require('assert');
var path = require('path');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('spl-jquery', function () {

    var deps = [
        [helpers.createDummyGenerator(), 'spl-jquery:app']
    ];

    describe('with default options', function () {

        beforeEach(function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .inDir(path.join(__dirname, './.temp'))
                .withGenerators(deps)
                .withOptions({install: false, git: false})
                .withPrompt({pluginName: 'test-name'})
                .on('end', done);
        });

        it('creates required files', function () {
            var expected = [
                ['.jshintrc', /"SPL": false/],

                ['.gitignore', /bower_components\//],
                ['.gitignore', /node_modules\//],

                ['package.json', /"name": "test-name"/],
                ['bower.json', /"name": "test-name"/],

                ['src/test-name.js', /\$\.fn\.testName/],
                ['src/test-name.js', /TestName = function TestName/]
            ];
            assert.fileContent(expected);
        });

    });


    describe('with with less', function () {

        before(function (done) {
            var a = helpers.run(path.join(__dirname, '../app'));

            a.inDir(path.join(__dirname, './.temp'));
            a.withGenerators(deps);
            a.withPrompt({pluginName: 'test-name'});
            a.withOptions({install: false, git: false});
            a.on('end', done);
        });

        it('creates required files', function () {
            var expected = [
                ['src/test-name.less', /\.test-name \{/]
            ];

            assert.fileContent(expected);
        });

    });

    after(function () {
        var deleteFolderRecursive = function (path) {
            if (fs.existsSync(path)) {
                fs.readdirSync(path).forEach(function (file, index) {
                    var curPath = path + "/" + file;
                    if (fs.lstatSync(curPath).isDirectory()) { // recurse
                        deleteFolderRecursive(curPath);
                    } else { // delete file
                        fs.unlinkSync(curPath);
                    }
                });
                fs.rmdirSync(path);
            }
        }('./.temp');

    });

});
