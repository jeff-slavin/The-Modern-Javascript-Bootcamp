const path = require('path');   // use this so paths work in all operating systems

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),                // needs to be an absolute path
        filename: '[name]-bundle.js' // [name] pulls from the entry key names (e.g. 'index' and 'edit')
    },
    module: {
        rules: [{   // an array of objects
            test: /\.js$/,        // regular expression (. character in regex has a special meaning, adding '\' means to match an actual '.' Also, the $ at the end means we are looking for this match at the end of the string)
            exclude: /node_modules/,        // regular expression
            use: {  // needs to be an object
                loader: 'babel-loader',
                options: {  // an object 
                    presets: ['env']    // array of strings
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'   // makes it so items in the console in devtools for browser actually point to our code before webpack conversion (so line #s and code look good and helpful)
};