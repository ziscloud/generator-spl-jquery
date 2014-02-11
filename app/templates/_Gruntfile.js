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
        <% if(useLess) { %>
        less: {
            default: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    'src/main.css': 'src/main.less'
                }

            },
            dist: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    'src/main.min.css': 'src/main.less'
                }
            }
        },<% } %>

        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['jshint:all', 'karma:unit']
            }
        },

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    <%= useLess ? "grunt.loadNpmTasks('grunt-contrib-less');" : '' %>


};
