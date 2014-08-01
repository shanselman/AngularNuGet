// grunt download --ver=1.2.9

// TODO: Wget all i18n? 
//wget -A js -nd -np -r -erobots=off --no-check-certificate https://code.angularjs.org/<% version %>/i18n/
 
//wget -A js -nd -L -np -r -erobots=off --no-check-certificate https://code.angularjs.org/1.2.9/i18n/   


module.exports = function (grunt) {
    grunt.initConfig({
        myApp: {
            urlPrefix: 'https://code.angularjs.org/' + grunt.option('ver')
        },

        'fetchpages': {
            dist: {
              options: {
                baseURL: "<%= myApp.urlPrefix %>//i18n/",
                urls: [
                    { url: '<%= myApp.urlPrefix %>/i18n/'}
                ],
                destinationFolder: './build/<%=grunt.option("ver")%>/angular-locale-<%=grunt.option("ver")%>/i18n/',
                followLinks: true,
                cleanHTML: false,
                fetchBaseURL: false,
                ignoreSelector: '[href="../"]'
              }
            }
          },

        'curl-dir': {
            'animate': {
              src: [
                '<%= myApp.urlPrefix %>/angular-animate.js',
                '<%= myApp.urlPrefix %>/angular-animate.min.js',
                '<%= myApp.urlPrefix %>/angular-animate.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-animate-<%=grunt.option("ver")%>'
            },
            'core': {
              src: [
                '<%= myApp.urlPrefix %>/angular.js',
                '<%= myApp.urlPrefix %>/angular.min.js',
                '<%= myApp.urlPrefix %>/angular.min.js.gzip',
                '<%= myApp.urlPrefix %>/angular.min.js.map',
                '<%= myApp.urlPrefix %>/angular-mocks.js'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-core-<%=grunt.option("ver")%>'
            },
            'cookies': {
              src: [
                '<%= myApp.urlPrefix %>/angular-cookies.js',
                '<%= myApp.urlPrefix %>/angular-cookies.min.js',
                '<%= myApp.urlPrefix %>/angular-cookies.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-cookies-<%=grunt.option("ver")%>'
            },
            'loader': {
              src: [
                '<%= myApp.urlPrefix %>/angular-loader.js',
                '<%= myApp.urlPrefix %>/angular-loader.min.js',
                '<%= myApp.urlPrefix %>/angular-loader.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-loader-<%=grunt.option("ver")%>'
            },
            'resource': {
              src: [
                '<%= myApp.urlPrefix %>/angular-resource.js',
                '<%= myApp.urlPrefix %>/angular-resource.min.js',
                '<%= myApp.urlPrefix %>/angular-resource.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-resource-<%=grunt.option("ver")%>'
            },
            'route': {
              src: [
                '<%= myApp.urlPrefix %>/angular-route.js',
                '<%= myApp.urlPrefix %>/angular-route.min.js',
                '<%= myApp.urlPrefix %>/angular-route.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-route-<%=grunt.option("ver")%>'
            },
            'sanitize': {
              src: [
                '<%= myApp.urlPrefix %>/angular-sanitize.js',
                '<%= myApp.urlPrefix %>/angular-sanitize.min.js',
                '<%= myApp.urlPrefix %>/angular-sanitize.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-sanitize-<%=grunt.option("ver")%>'
            },
            'touch': {
              src: [
                '<%= myApp.urlPrefix %>/angular-touch.js',
                '<%= myApp.urlPrefix %>/angular-touch.min.js',
                '<%= myApp.urlPrefix %>/angular-touch.min.js.map'
              ],
              dest: './build/<%=grunt.option("ver")%>/angular-touch-<%=grunt.option("ver")%>'
            }
        },

        'template': {
                'options': {
                },
                    'Core': {
                        'options': {
                            'data' : { 
                                'module': "Core",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-core-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }

                    },
                    'Animate': {
                         'options': {
                            'data' : { 
                                'module': "Animate",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-animate-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Cookies': {
                         'options': {
                            'data' : { 
                                'module': "Cookies",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-cookies-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Loader': {
                         'options': {
                            'data' : { 
                                'module': "Loader",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-loader-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Loader': {
                         'options': {
                            'data' : { 
                                'module': "Loader",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-loader-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Locale': {
                         'options': {
                            'data' : { 
                                'module': "Locale",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-locale-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Resource': {
                         'options': {
                            'data' : { 
                                'module': "Resource",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-resource-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Route': {
                         'options': {
                            'data' : { 
                                'module': "Route",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-route-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Sanitize': {
                         'options': {
                            'data' : { 
                                'module': "Sanitize",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-sanitize-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    },
                    'Touch': {
                         'options': {
                            'data' : { 
                                'module': "Touch",
                                'version': grunt.option('ver')
                            }
                        },
                        'files': {
                            'build/<%= grunt.option("ver") %>/angular-touch-<%= grunt.option("ver") %>/package.nuspec': ['package.nuspec.tpl']
                        }
                    }

            },

        'generate' : {
             modules: ['Core', 'Animate','Cookies','Loader','Resource','Route','Sanitize','Touch']
        },

         clean: {
            options: { force: true },
            all: {
                src: ['./build/*.*']
            },
            version: {
                src: ['./build/<%=grunt.option("ver")%>/*.*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-fetch-pages');

    grunt.registerTask('download', function(n) {
            grunt.log.writeln('GET angularjs version ' + grunt.option('ver'));
            //grunt.task.run(['curl-dir','fetchpages']);
            grunt.task.run(['curl-dir']);
            //grunt.task.run(['fetchpages']);
    });

    grunt.registerTask('download-locales', function(n){

        grunt.file.mkdir('build/' +  grunt.option("ver") + '/angular-locale-' + grunt.option("ver") + '/i18n/');
        //grunt.task.run(['fetchpages']);

    });

    grunt.registerTask('default', ['clean:version', 'download-locales','download', 'template']); //still need --ver=1.2.9 for example
};