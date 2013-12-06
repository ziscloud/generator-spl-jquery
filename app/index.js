'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var SplJqueryGenerator = module.exports = function SplJqueryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SplJqueryGenerator, yeoman.generators.Base);

SplJqueryGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'pluginName',
    message: 'What is the name of the plugin?'
  }];

  this.prompt(prompts, function (props) {
    this.pluginName = props.pluginName;

    cb();
  }.bind(this));
};

SplJqueryGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('test');

  this.template('_main.js', 'src/main.js');
  this.template('_mainSpec.js', 'test/mainSpec.js');

  this.template('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_karma.conf.js', 'karma.conf.js');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};

SplJqueryGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('jshintrc', '.jshintrc');
};
