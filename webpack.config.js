var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server',
        path.resolve(__dirname, './app/entry.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react',]
                }
            },
            {
                test: /\.less$/,
                loaders: "style-loader!css-loader!less-loader" 
            }            
        ]
},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};