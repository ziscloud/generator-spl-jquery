module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: true
            },
            all: ['src/<%= pluginName %>.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: false
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
                    'src/<%= pluginName %>.css': 'src/<%= pluginName %>.less'
                }

            },
            dist: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    'dist/<%= pluginName %>.min.css': 'src/<%= pluginName %>.less'
                }
            }
        },<% } %>

        uglify: {
            dist: {
                files: {
                    'dist/<%= pluginName %>.min.js': ['src/<%= pluginName %>.js']
                }
            }
        },

        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: [<%= useLess ? "'less:default', " : '' %>'jshint:all', 'karma:unit']
            }
        },

        release: {
            options: {
                file:   'bower.json',
                npm:    false,
                npmtag: false
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-release');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    <%= useLess ? "grunt.loadNpmTasks('grunt-contrib-less');" : '' %>

    grunt.registerTask('dist', ['jshint:all', 'uglify:dist', 'less:dist']);
};
