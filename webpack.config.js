const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },        
        ],
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'out.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html',
    }
    )]
};
