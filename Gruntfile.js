module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  var jsSrc = ['../js/dedicated.js', '../js/filter.js'];
  var jsDist = '../js/dedicated-compile.js';

  // Configuration de Grunt
  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      compile: { 
        src: jsSrc, 
        dest: jsDist 
      }
    },
    jshint: {
      all: jsSrc
    }, 
    uglify: {
      options: {
        separator: ';'
      },
      compile: {
        src: jsSrc,
        dest: jsDist
      }
    },
    watch: {
      scripts: {
        files: jsSrc,
        tasks: ['jshint:all', 'concat:compile']
      }
    }
  })

  grunt.registerTask('default', ['dev', 'concat:compile']);
  grunt.registerTask('dev', ['watch:scripts']);
  grunt.registerTask('prod', ['uglify:compile']);

}
