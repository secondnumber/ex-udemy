const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
       rules: [
           {
               test: /\.(js)$/,
               exclude: /(node_modules|bower_components)/,
               loader: "babel-loader",
               options: { presets: ["@babel/env"] }
           },
           {
               test: /\.(jpg|jpeg|png|gif|ico)$/,
               use: [{ loader: 'file-loader',
                   options: {
                        outputPath: 'images',
                       name: '[name]-[sha1:hash:8].[ext]'
                   }
               }]
           },
       ],
},
    plugins: [new HtmlWebpackPlugin({
        title: 'Ex',
        buildTime: new Date().toISOString(),
        template: 'public/index.html'
    })]
};