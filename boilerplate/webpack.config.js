const path = require('path');   // use this so paths work in all operating systems

module.exports = {
    entry: './src/index.js',    // relative path
    output: {
        path: path.resolve(__dirname, 'public/scripts'),                // needs to be an absolute path
        filename: 'bundle.js'
    }
};