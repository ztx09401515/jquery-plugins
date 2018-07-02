const webpack = require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var baseConfig=require('./webpack.config');
module.exports=Object.assign({},baseConfig,{entry:{
    fileDraster:__dirname+"/src/jt-file-dragger/file-draster.ts",
    "draster-image-preview":__dirname+"/src/jtCropper/draster-image-preview.ts",
    "search-input":__dirname+"/src/search-input/search-input.ts",
    "search-input-multi-select":__dirname+"/src/search-input/search-input-multi-select.ts",
    "search-multi-select":__dirname+"/src/search-multi-select/search-multi-select.ts",
},
    output:{
        path:__dirname+'/lib/' ,
        filename:"[name]/index.js",
    },
    plugins:[

        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest:require('./static/js/staticMod_manifest.json')
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new MiniCssExtractPlugin({filename:"[name]/style.css"}),

        // new CompressionPlugin({
        //     test: /\.js$/,
        //     cache:true,
        // })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "jquery",
        //
        // })
    ]
})