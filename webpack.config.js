// path module
const path = require('path');

module.exports = {
    mode: 'development',
    // entry point, where webpack will look for Js source code
    entry: './src/index.js',
    output: {
        // __direname gets the current directory of webpack.config.js
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}