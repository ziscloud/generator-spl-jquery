module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        changelog: {
            options: {
                dest: "CHANGELOG"
            }
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
