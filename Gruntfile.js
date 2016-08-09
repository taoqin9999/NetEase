module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        netEase: grunt.file.readJSON('netEase.json'),
        clean: {
            'options': {
                'force': true
            },
            'dist': ['<%= netEase.build %>/dist']
        },
        concat: {
            ne: {
                src: '<%= netEase.src %>',
                dest: '<%= netEase.dest %>'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%=netEase.min%>': '<%= netEase.dest %>'
                }
            }
        },
        jshint: {
            files: ['webap/src/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                reporter: 'jslint',
                reporterOutput: '<%= netEase.build %>/report/jshint.xml'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        jsduck: {
            main: {
                src: ['<%= netEase.doc %>'],
                dest: '<%= netEase.build %>/dist/docs',
                options: {
                    'title': 'netEase',
                    'no-source': true,
                    'builtin-classes': true
                }
            }
        }
    });

    grunt.registerTask('doc', ['jsduck']);
    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'doc']);
    grunt.registerTask('package', ['concat', 'uglify']);
};
