module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        clean: {
            dist:{
                src: ['dist/*']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['src/<%= pluginName %>.js']
        },
        copy: {
              main: {
                  expand: true,
                  cwd: 'src/',
                  src: '**',
                  dest: 'dist/'
              }
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
                },
                options: {
                    preserveComments: false,
                    sourceMap: true,
                    sourceMapName: 'dist/<%= pluginName %>.min.map',
                    report: 'min',
                    beautify: {
                        ascii_only: true
                    }
                }
            }
        },

        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: [<%= useLess ? "'less:default', " : '' %>'jshint:all', 'karma:unit']
            }
        },

        jsdoc : {
            dist : {
                src: ['src/*.js', 'test/*.js'],
                jsdoc: 'node_modules/.bin/jsdoc',
                options: {
                    destination: 'doc'
                }
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
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-release');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    <%= useLess ? "grunt.loadNpmTasks('grunt-contrib-less');" : '' %>

    grunt.registerTask('dist', ['clean:dist', 'jshint:all', 'jsdoc', 'copy', 'uglify:dist'<%= useLess ? ", 'less:dist'" : '' %>]);

};
