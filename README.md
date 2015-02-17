# grunt-amdclean
Grunt task for [AMDClean](https://github.com/gfranko/amdclean)

## Usage
```
amdclean: {
    options: {
        wrap: true,
        autoModuleTransform: false,
        autoModulePrefix: 'm'        
    },
    main: 'src/main.js', // sorthand for { src: 'src/main.js' }
    lib: {
        options: {
            autoModuleTransform: true,
            autoModulePrefix: 'lib'
        },
        src: 'lib/main.js',
        dest: 'lib/main.clean.js'
    }
}
```

## Parameters
### src
`String` **required**
Source file path to run through AMDClean.

### dest
`string` optional

Destination file path to output code run through AMDClean. If not provided, `src` value will be used.

## Options
In addition to the default [AMDClean options](https://github.com/gfranko/amdclean#options), the following options are available:

### autoModuleTransform
`Boolean` default: `false`

If `true`, rename all modules that AMDClean cleans. All modules will be prefixed with the options defined in `options.autoModulePrefix` following by an incrementing integer.

This is useful for mangling an shortening module names.

### autoModulePrefix
`String` default: `m`

Value to prefix all modules names with if `options.autoModuleTransform` is set to `true`.

### wrap
`Object|Boolean` default: `Object`

While this option is a part of AMDclean's default options, the grunt plugin add support for a boolean value. Setting the value to `true` will add the default wrap.
