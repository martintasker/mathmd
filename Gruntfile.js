// Generated on 2016-04-28 using generator-angular 0.15.1
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  require('jit-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: './.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'src/*.js',
          '!src/*.spec.js'
        ]
      },
      test: {
        options: {
          jshintrc: './.jshintrc'
        },
        src: ['src/*.spec.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: './.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          'src/*.js',
          '!src/*.spec.js'
        ]
      },
      test: {
        src: ['src/*.spec.js']
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'karma'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'test'
  ]);
};
