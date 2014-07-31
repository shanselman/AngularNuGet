// grunt download --ver=1.2.9

module.exports = function (grunt) {
    grunt.initConfig({
        version: {
            toFetch: grunt.option('ver'),
            urlPrefix: 'https://code.angularjs.org/' + grunt.option('ver')
        },

        'curl-dir': {
            'animate': {
              src: [
                '<%= version.urlPrefix %>/angular-animate.js',
                '<%= version.urlPrefix %>/angular-animate.min.js',
                '<%= version.urlPrefix %>/angular-animate.min.js.map'
              ],
              dest: './build/angular-animate-<%=version.toFetch%>'
            },
            'core': {
              src: [
                '<%= version.urlPrefix %>/angular.js',
                '<%= version.urlPrefix %>/angular.min.js',
                '<%= version.urlPrefix %>/angular.min.js.gzip',
                '<%= version.urlPrefix %>/angular.min.js.map',
                '<%= version.urlPrefix %>/angular-mocks.js'
              ],
              dest: './build/angular-core-<%=version.toFetch%>'
            },
            'cookies': {
              src: [
                '<%= version.urlPrefix %>/angular-cookies.js',
                '<%= version.urlPrefix %>/angular-cookies.min.js',
                '<%= version.urlPrefix %>/angular-cookies.min.js.map'
              ],
              dest: './build/angular-cookies-<%=version.toFetch%>'
            },
            'loader': {
              src: [
                '<%= version.urlPrefix %>/angular-loader.js',
                '<%= version.urlPrefix %>/angular-loader.min.js',
                '<%= version.urlPrefix %>/angular-loader.min.js.map'
              ],
              dest: './build/angular-loader-<%=version.toFetch%>'
            },
            'resource': {
              src: [
                '<%= version.urlPrefix %>/angular-resource.js',
                '<%= version.urlPrefix %>/angular-resource.min.js',
                '<%= version.urlPrefix %>/angular-resource.min.js.map'
              ],
              dest: './build/angular-resource-<%=version.toFetch%>'
            },
            'route': {
              src: [
                '<%= version.urlPrefix %>/angular-route.js',
                '<%= version.urlPrefix %>/angular-route.min.js',
                '<%= version.urlPrefix %>/angular-route.min.js.map'
              ],
              dest: './build/angular-route-<%=version.toFetch%>'
            },
            'sanitize': {
              src: [
                '<%= version.urlPrefix %>/angular-sanitize.js',
                '<%= version.urlPrefix %>/angular-sanitize.min.js',
                '<%= version.urlPrefix %>/angular-sanitize.min.js.map'
              ],
              dest: './build/angular-sanitize-<%=version.toFetch%>'
            },
            'touch': {
              src: [
                '<%= version.urlPrefix %>/angular-touch.js',
                '<%= version.urlPrefix %>/angular-touch.min.js',
                '<%= version.urlPrefix %>/angular-touch.min.js.map'
              ],
              dest: './build/angular-touch-<%=version.toFetch%>'
            }
        },

        'template': {
                'options': {
                    // Task-specific options go here
                },
                'generate-nuspec': {
                    'options': {
                        // Target-specific options go here
                    },
                    'files': {
                        // Target-specific file lists go here
                    }
                }
            }



         clean: {
            options: { force: true },
            all: {
                src: ['./build/*.*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-curl');

    grunt.registerTask('download', function(n) {
            console.log('GET angularjs version <%=version.toFetch%>');
            grunt.task.run(['curl-dir']);
    });
    grunt.registerTask('default', ['prep']);
    grunt.registerTask('prep', ['clean', 'copy']);
};