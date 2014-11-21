/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');
var path    = require('path');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

var TEST_PATH = './.temp';
var TEST_NAME = 'test-name';
var TEST_CMD  = 'spl-jquery:app';

describe('spl-jquery', function () {

  describe('with default options', function() {
    beforeEach(function (done) {
      var deps = [
        [helpers.createDummyGenerator(), TEST_CMD],
      ];

      helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(__dirname, TEST_PATH))
          .withGenerators(deps)
          .withOptions({install: false, git: false})
          .withPrompt({pluginName: TEST_NAME})
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
          ['src/test-name.js', /TestName = function TestName()/]
      ];
      assert.fileContent(expected);
    });
  });


  describe('with with less', function() {
    before(function (done) {
      var deps = [
        [helpers.createDummyGenerator(), TEST_CMD],
      ];

      helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, TEST_PATH))
      .withGenerators(deps)
      .withOptions({install: false, git: false})
      .withPrompt({pluginName: TEST_NAME})
      .on('end', done);
    });

    it('creates required files', function () {
      var expected = [
          ['src/test-name.less', /\.test-name {/]
      ];

      assert.fileContent(expected);
    });
  });

  after(function() {
    var deleteFolderRecursive = function(path) {
      if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file,index){
          var curPath = path + "/" + file;
          if(fs.lstatSync(curPath).isDirectory()) { // recurse
            deleteFolderRecursive(curPath);
          } else { // delete file
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(path);
      }
    }(TEST_PATH);
  });
});
