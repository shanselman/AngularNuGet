// grunt download --ver=1.2.9

module.exports = function (grunt) {
    grunt.initConfig({
        version: {
            toFetch: grunt.option('ver'),
            urlPrefix: 'https://code.angularjs.org/' + grunt.option('ver'),
            module: grunt.option('module')
        },

        'curl-dir': {
            'animate': {
              src: [
                '<%= version.urlPrefix %>/angular-animate.js',
                '<%= version.urlPrefix %>/angular-animate.min.js',
                '<%= version.urlPrefix %>/angular-animate.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-animate-<%=version.toFetch%>'
            },
            'core': {
              src: [
                '<%= version.urlPrefix %>/angular.js',
                '<%= version.urlPrefix %>/angular.min.js',
                '<%= version.urlPrefix %>/angular.min.js.gzip',
                '<%= version.urlPrefix %>/angular.min.js.map',
                '<%= version.urlPrefix %>/angular-mocks.js'
              ],
              dest: './build/<%=version.toFetch%>/angular-core-<%=version.toFetch%>'
            },
            'cookies': {
              src: [
                '<%= version.urlPrefix %>/angular-cookies.js',
                '<%= version.urlPrefix %>/angular-cookies.min.js',
                '<%= version.urlPrefix %>/angular-cookies.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-cookies-<%=version.toFetch%>'
            },
            'loader': {
              src: [
                '<%= version.urlPrefix %>/angular-loader.js',
                '<%= version.urlPrefix %>/angular-loader.min.js',
                '<%= version.urlPrefix %>/angular-loader.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-loader-<%=version.toFetch%>'
            },
            'resource': {
              src: [
                '<%= version.urlPrefix %>/angular-resource.js',
                '<%= version.urlPrefix %>/angular-resource.min.js',
                '<%= version.urlPrefix %>/angular-resource.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-resource-<%=version.toFetch%>'
            },
            'route': {
              src: [
                '<%= version.urlPrefix %>/angular-route.js',
                '<%= version.urlPrefix %>/angular-route.min.js',
                '<%= version.urlPrefix %>/angular-route.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-route-<%=version.toFetch%>'
            },
            'sanitize': {
              src: [
                '<%= version.urlPrefix %>/angular-sanitize.js',
                '<%= version.urlPrefix %>/angular-sanitize.min.js',
                '<%= version.urlPrefix %>/angular-sanitize.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-sanitize-<%=version.toFetch%>'
            },
            'touch': {
              src: [
                '<%= version.urlPrefix %>/angular-touch.js',
                '<%= version.urlPrefix %>/angular-touch.min.js',
                '<%= version.urlPrefix %>/angular-touch.min.js.map'
              ],
              dest: './build/<%=version.toFetch%>/angular-touch-<%=version.toFetch%>'
            }
        },

        'template': {
                'options': {
                    // Task-specific options go here
                },
                'generate-nuspec': {
                    'options': {
                        'data': {
                            'version': grunt.option('ver'),
                            'module': grunt.option('module'),
                            'id': 'AngularJS.' + grunt.option('module')
                        }
                        
                    },
                    'files': {
                        'build/<%= version.toFetch %>/angular-<%= version.module.toLowerCase() %>-<%= version.toFetch %>/package.nuspec': ['package.nuspec.tpl']
                    }
                }
            },



         clean: {
            options: { force: true },
            all: {
                src: ['./build/<%=version.toFetch%>/*.*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-template');

    grunt.registerTask('download', function(n) {
            console.log('GET angularjs version <%=version.toFetch%>');
            grunt.task.run(['curl-dir']);

    });
    grunt.registerTask('generate', function(n) {
        console.log('in generate task');

        var modules = ['Core', 'Animate','Cookies','Loader','Resource','Route',
            'Sanitize','Touch'];

        for(module in modules)
        {
            console.log(module);
            grunt.option('module', module);

            grunt.task.run(['template']);
        }

    });
};