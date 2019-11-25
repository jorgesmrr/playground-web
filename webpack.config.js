const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const plugins = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['src/**', '!.gitignore'],
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
    })
];

const buildPaths = [
    './src/',
];
const entries = {};

buildPaths.forEach(buildPath => {
    const directoryPath = path.join(__dirname, buildPath);
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
        if (/\.(js|css)$/.test(file)) {
            entries[buildPath + file] = buildPath + file;
        }
    });
});

entries['./src/styles/main'] = './src/styles/main.css';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: entries,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins
};