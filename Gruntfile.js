'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
            options: {
                node: true,
                esnext: true
            }
        },
        nodemon: {
            dev: {
                script: 'lib/index.js',
                options: {
                    nodeArgs: ['--debug']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('run-dev', ['build', 'nodemon:dev']);

};
