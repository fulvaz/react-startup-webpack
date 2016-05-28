var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/entry.js'],

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
                loader: 'babel',
                query: {
                    presets: ['es2015','react', 'stage-0'],
                    sourceMaps: 'both'
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
        // loaders: [
        //     { test: /\.jsx?$/, loaders: ['jsx?harmony']}
        // ]
    }
}