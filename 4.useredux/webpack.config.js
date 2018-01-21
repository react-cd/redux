var path = require('path');
var data = path.resolve();
console.log(data);
module.exports = {
    entry: './index.js',
    output: {
        path: `${path.resolve()}/../build`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}