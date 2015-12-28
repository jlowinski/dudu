'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', '!lib/public/static/**/*.js'],
            options: {
                node: true,
                esnext: true,
                globals: {
                    jQuery: true
                }
            }
        },
        bowercopy: {
            bootstrap: {
                files: {
                    'lib/public/static/vendor/jquery': 'jquery/dist',
                    'lib/public/static/vendor/bootstrap': 'bootstrap/dist',
                    'lib/public/static/vendor/html5shiv': 'html5shiv/dist',
                    'lib/public/static/vendor/respond': 'respond/dest',
                    'lib/public/static/vendor/bootstrap-validator': 'bootstrap-validator/dist'
                }
            }
        },
        nodemon: {
            dev: {
                script: 'lib/index.js',
                options: {
                    nodeArgs: ['--debug'],
                    env: {
                        'NODE_ENV': 'dev'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['jshint', 'bowercopy']);
    grunt.registerTask('run-dev', ['build', 'nodemon:dev']);

};
