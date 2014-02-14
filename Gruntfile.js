module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        release: {
            options: {
                file:   'package.json'
            }
        }

    });

    grunt.loadNpmTasks('grunt-release');
};
