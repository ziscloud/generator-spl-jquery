module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        changelog: {
            options: {}
        },

        release: {
            options: {
                file:   'package.json'
            }
        }

    });

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-changelog');
};
