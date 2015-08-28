(function () {
    'use strict';
    var util = require('util');
    var path = require('path');
    var generators = require('yeoman-generator');
    var mkdir = require("mkdirp");
    var uss = require('underscore.string');

    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('install', {defaults: true});
            this.option('git', {defaults: true});
            this.uss = uss;
        },

        promptTask: function () {
            var done = this.async();
            this.prompt({
                name: 'pluginName',
                message: 'What is the name of the plugin?',
                "default": process.cwd().split(path.sep).reverse()[0]
            }, function (answer) {
                this.pluginName = answer.pluginName;

                this.prompt({
                    type: 'confirm',
                    name: 'useLess',
                    message: 'Will this plugin use LESS as a CSS precompiler?',
                    "default": true
                }, function (answer) {
                    this.useLess = answer.useLess;
                    done();
                }.bind(this));
            }.bind(this));
        },

        createGenericFiles: function() {
            this.copy('jshintrc', '.jshintrc');
            this.copy('gitignore', '.gitignore');
            this.copy('bowerrc', '.bowerrc');
        },

        createMainJsAndTestFiles:   function () {

            this.fs.copyTpl(
                    this.templatePath('_main.js'),
                    this.destinationPath('src/' + this.pluginName + '.js'),
                    { pluginName: this.pluginName, uss: this.uss }
            );

            this.fs.copyTpl(
                    this.templatePath('_mainSpec.js'),
                    this.destinationPath('test/' + this.pluginName + 'Spec.js'),
                    { pluginName: this.pluginName, uss: this.uss }
            );
        },

        createLessFilesIfNeeded: function () {
            if (this.useLess) {
                this.fs.copyTpl(
                        this.templatePath('_main.less'),
                        this.destinationPath('src/' + this.pluginName + '.less'),
                        { pluginName: this.pluginName, uss: this.uss }
                );
            }
        },

        createDependenciesAndSetupFiles: function () {
            this.fs.copyTpl(
                    this.templatePath('_package.json'),
                    this.destinationPath('package.json'),
                    { pluginName: this.pluginName, useLess: this.useLess, uss: this.uss }
            );
            this.fs.copyTpl(
                    this.templatePath('_bower.json'),
                    this.destinationPath('bower.json'),
                    { pluginName: this.pluginName, useLess: this.useLess, uss: this.uss }
            );
            this.fs.copyTpl(
                    this.templatePath('_karma.conf.js'),
                    this.destinationPath('karma.conf.js'),
                    { pluginName: this.pluginName, uss: this.uss }
            );
            this.fs.copyTpl(
                    this.templatePath('_Gruntfile.js'),
                    this.destinationPath('Gruntfile.js'),
                    { pluginName: this.pluginName, useLess: this.useLess, uss: this.uss }
            );
        },

        end: function () {
            if (this.options.install) {
                this.installDependencies();
                this.spawnCommand('grunt', ['dist'])
            }

            if (this.options.git) {
                this.spawnCommand('git', ['init']);
            }
        }
    });
}());
