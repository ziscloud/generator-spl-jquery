// Karma configuration
// Generated on Mon Oct 21 2013 12:45:01 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    preprocessors: {
        '**/src/*.js': 'coverage'
    },

    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },

    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/jquery.js',
        'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
        'src/*.js',
        'test/*Spec.js'
        /*
        {
            pattern: 'test/fixtures/*.html',
            watched: true,
            included: false,
            served: true
        },
        {
            pattern: 'test/fixtures/*.json',
            watched: true,
            included: false,
            served: true
        }
        */
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
     reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
  });
};