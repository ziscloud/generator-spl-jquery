'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var SplJqueryGenerator = module.exports = function SplJqueryGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ 
      skipInstall: options['skip-install'],
      callback: function() {;
        this.emit('dependenciesInstalled')
      }.bind(this)
    });
  });

  this.on('dependenciesInstalled', function() {

    this.spawnCommand('grunt', ['dist']).on('exit', function() {
      this.emit('gruntComplete') 
    }.bind(this));

  });

  this.on('gruntComplete', function() {

    this.spawnCommand('git', ['init']).on('exit', function() {
      this.emit('gitComplete')
    }.bind(this));

  });

  this.on('gitComplete', function() {
    this.log.ok('To start testing, please run');
    this.log.ok('$ grunt watch:karma');
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SplJqueryGenerator, yeoman.generators.Base);

SplJqueryGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'pluginName',
      message: 'What is the name of the plugin?',
      default: process.cwd().split(path.sep).reverse()[0]
    },
    {
      name: 'useLess',
      type: 'confirm',
      message: 'Will this plugin use LESS as a CSS precompiler?',
      default: true
    }
  ];

  this.prompt(prompts, function (props) {
    this.pluginName = props.pluginName;
    this.useLess    = props.useLess;

    cb();
  }.bind(this));
};

SplJqueryGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('test');

  this.template('_main.js', 'src/' + this.pluginName + '.js');
  this.template('_mainSpec.js', 'test/' + this.pluginName + 'Spec.js');

  if (this.useLess) {
    this.template('_main.less', 'src/' + this.pluginName + '.less');
  }

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_karma.conf.js', 'karma.conf.js');
  this.template('_Gruntfile.js', 'Gruntfile.js');
};

SplJqueryGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore')
  this.copy('readme', 'README.md')
};
