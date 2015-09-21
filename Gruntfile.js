module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['*.js', 'test/**/*.js', 'controllers/V1/**/*.js', 'models/**/*.js'],
      options: {
        globals: {
          node: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jscs']
    },
    jscs: {
        src: ['*.js', 'test/**/*.js', 'controllers/V1/**/*.js', 'models/**/*.js'],
        options: {
          config: '.jscsrc'
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('test', ['jshint']);
  //grunt.registerTask('jscs', ['jscs']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('default', ['jshint', 'jscs']);

};
