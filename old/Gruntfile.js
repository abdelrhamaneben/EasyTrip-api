module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: [
        '*.js',
        'test/**/*.js',
        'controllers/V1/**/*.js',
        'models/**/*.js'],
      options: {
        globals: {
          node: true
        }
      }
    },
    jscs: {
      src: [
        '*.js',
        'test/**/*.js',
        'controllers/V1/**/*.js',
        'models/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('test', ['jshint', 'jscs', 'mochaTest']);
  grunt.registerTask('default', ['jshint', 'jscs', 'mochaTest']);

};
