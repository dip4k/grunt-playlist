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
        src: ["css/*.css"],
        dest: "build/styles.css"
      }
    }
  });

  //load Plugins
  //   grunt.loadNpmTasks('');
  grunt.loadNpmTasks("grunt-contrib-concat");

  //Register Task

  //   grunt.registerTask("all", ["run", "sleep"]);
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
};
