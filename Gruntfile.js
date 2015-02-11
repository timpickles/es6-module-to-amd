/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        src: [
                            'src/old-skool/existing-require-module.js',
                            'src/html/index.html'
                        ],
                        dest: 'dist/',
                        flatten: true,
                        expand: true
                    }
                ]
            }
        },
        '6to5': {
            options: {
                sourceMap: true,
                modules: 'amd'
            },
            dist: {
                files: {
                    'dist/say-hello-es6.js': 'src/es6/say-hello.js'
                }
            }
        },
        clean: {
            folder: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-6to5');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [
        'clean',
        'copy',
        '6to5'
    ]);
};
