module.exports = function(grunt) {
  //configuration
  grunt.initConfig({
    //pass in options to plugins

    //concat
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "build/scripts.js"
      },
      css: {
        src: ["css/bootstrap.css", "css/reset.css", "css/styles.css"],
        dest: "build/styles.css"
      }
    },

    //sass
    sass: {
      build: {
        files: [
          {
            src: "css/sass/styles.scss",
            dest: "css/styles.css"
          }
        ]
      }
    },
    //Uglify
    uglify: {
      build: {
        files: [
          {
            src: "build/scripts.js",
            dest: "build/scripts-min.js"
          }
        ]
      }
    }
  });

  //load Plugins
  //   grunt.loadNpmTasks('');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  //Register Task

  //   grunt.registerTask("all", ["run", "sleep"]);
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
};
