var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                query: {
                    presets: ['react']
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}