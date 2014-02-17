module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        changelog: {
            options: {
                from: "2011-05-01"
            }
        },

        release: {
            options: {
                file:   'package.json'
            }
        }

    });

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-conventional-changelog');
};
