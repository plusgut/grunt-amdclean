/*
 * grunt-modify-json
 * https://github.com/aarongloege/grunt-modify-json
 *
 * Copyright (c) 2014 Aaron Gloege
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

      amdclean: {
          options: {
              autoModuleTransform: false,
              autoModulePrefix: '_'
          },
          main: {
              files: {
                  'test/main.clean.js': 'test/main.js'
              }
          }
      }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

};
