var path = require('path');
module.exports = {
    entry:'./index.js',
    output:{
        // path:'../build',
        path: `${path.resolve()}/../build`,

        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                include:__dirname
            }
        ]
    }
}