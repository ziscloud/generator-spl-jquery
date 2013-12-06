module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['src/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['jshint:all', 'karma:unit:run']
            }
        },
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
