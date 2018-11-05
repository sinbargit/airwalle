const webpack = require('webpack');
const path = require('path');
const config = {
    mode: 'development',
    entry: {index: [require.resolve('babel-polyfill'), './index.js']},
    output: {
        publicPath: 'http://localhost:8080/dist',
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {test: /\.json$/, use: {loader: 'json-loader'}},
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'stage-0', 'react'],
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/dist/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/, use: [
                'style-loader',
                {loader: 'css-loader', options: {importloaders: 1}},
                'postcss-loader'
            ],
            },
        ],
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 80
    }
};
// webpack(config, function (err, info) {
//     console.log("----------")
//     console.error('ERR--'+err)
//     err || console.log('info--'+info)
// })
module.exports = config;

