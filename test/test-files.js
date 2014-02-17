/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');
var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('spl-jquery generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
          if (err) {
            return done(err);
          }

          this.splapp = helpers.createGenerator('spl-jquery:app', [
            '../../app', [
              helpers.createDummyGenerator(),
              'mocha:app'
            ]
          ]);
          this.splapp.options['skip-install'] = true;

          done();
        }.bind(this));
    });   

    it('creates required files', function (done) {
        var expected = [
            ['.jshintrc', /"SPL": false/],

            ['.gitignore', /bower_components\//],
            ['.gitignore', /node_modules\//],

            ['package.json', /"name": "test-name"/],
            ['bower.json', /"name": "test-name"/],

            ['src/test-name.js', /\$\.fn\.testName/],
            ['src/test-name.js', /TestName = function TestName()/]
        ];

        helpers.mockPrompt(this.splapp, {
            pluginName: 'test-name',
        });

        this.splapp.useLess = false;

        this.splapp.options['skip-install'] = true;
        this.splapp.run({}, function() {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates required files with LESS', function (done) {
        var expected = [
            ['src/test-name.less', /\.test-name {/]
        ];

        helpers.mockPrompt(this.splapp, {
            pluginName: 'test-name',
            useLess: true
        });

        this.splapp.options['skip-install'] = true;
        this.splapp.run({}, function() {
            helpers.assertFiles(expected);
            done();
        });
    });
    
});
