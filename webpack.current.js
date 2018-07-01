const webpack = require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var baseConfig=require('./webpack.config.js')
var config=Object.assign({},baseConfig,{
    entry:{
        'search-input-multi-select':__dirname+"/demo/search-input-multi-select/entry.js",
    }
})
module.exports =config;