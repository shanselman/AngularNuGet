module.exports = function (grunt) {
    var version = grunt.option('ver');

    grunt.initConfig({
        'curl-dir': {
            'getfiles': {
              // These will be saved as:
              // 'location/to/save/files/file1.js' and
              // 'location/to/save/files/file2.js'
              src: [
                'https://code.angularjs.org/' + version + '/angular-animate.js',
                'https://code.angularjs.org/' + version + '/angular-animate.min.js',
                'https://code.angularjs.org/' + version + '/angular-animate.min.js.map'
              ],
              dest: './build/angular-animate-' + version
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-curl');

    grunt.registerTask('download', function(n) {
            console.log(version);
            grunt.task.run(['curl-dir']);
    });
    grunt.registerTask('default', ['prep']);
    grunt.registerTask('prep', ['clean', 'copy']);
};