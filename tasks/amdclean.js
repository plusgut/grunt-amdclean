/*global module,require */

var amdclean = require('amdclean');

/**
 * Default task options
 *
 * @type Object
 * @static
 */
var DEFAULT_OPTIONS = {

    // Automatically transform module names into simple, mangled names
    autoModuleTransform: false,

    // If `autoModuleTransform` is `true`, prefix all modules with
    // this string, followed by an incrementing number
    autoModulePrefix: 'm'
};

/**
 * If `wrap` options is set to `true`, set value to this
 *
 * @type Object
 * @static
 */
var DEFAULT_WRAP = {
    // This string is prepended to the file
    start: ';(function() {\n',
    // This string is appended to the file
    end: '\n}());'
};

/**
 * Create a transform function that transforms module names
 * into simple, short ones.
 *
 * @type Function
 * @param {Object} options
 * @param {String} options.autoModulePrefix
 * @returns {Function}
 * @private
 */
var _createPrefixTransform = function(options) {
    var map = {};
    var i = 0;

    return function(module) {
        if (!map.hasOwnProperty(module)) {
            map[module] = options.autoModulePrefix + (i++);
        }

        return map[module];
    };
};

module.exports = function(grunt) {
    'use strict';

    // Register plugin
    grunt.registerMultiTask('amdclean', function() {
        var done = this.async();
        var options = this.options(DEFAULT_OPTIONS);
        var autoTransform = options.autoModuleTransform === true;

        // If code is set, files will not be read
        delete options.code;

        // warn about `autoModuleTransform` and `prefixTransform` options
        if (autoTransform && options.prefixTransform) {
            grunt.log.warn(
                'autoModuleTransform'.cyan + ' and ' + 'prefixTransform'.cyan + ' are mutually exclusive options. Ignoring ' + 'prefixTransform'.cyan
            );
        }

        // Allow `wrap: true` (Not allowed in default amdclean options)
        if (options.wrap === true) {
            options.wrap = DEFAULT_WRAP;
        }

        // Clean files
        this.files.forEach(function(file) {
            // Set file path
            options.filePath = file.src[0];

            // Transform each module name into something simple (m1, m2, m3).
            // UglifyJS will not mangle these names, so it is ideal to keep them small.
            if (autoTransform) {
                options.prefixTransform = _createPrefixTransform(options);
            }

            grunt.file.write(file.dest, amdclean.clean(options));

            grunt.log.ok('Cleaning ' + file.dest.cyan + ': ' + ' OK'.green);
        });

        done();
    });
};