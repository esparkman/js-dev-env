// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile our tests run.
require('babel-register')();

// Disable Webpack feature that Mocha doesn't understand
require.extensions['.css'] = function() {};
