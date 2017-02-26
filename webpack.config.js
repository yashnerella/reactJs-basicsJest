/**
 * Created by yashw on 08-02-2017.
 */
var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/js/index.js",
    output: {
        path: DIST_DIR + "/js",
        filename: "bundle.js",
        publicPath: "/js/"
    },

    devServer: {
        inline: true,
        port: 7070
    },

    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react","es2015","stage-2"]
                }
            }
        ]
    }
};

module.exports = config;