var path = require('path');
module.exports = {
    entry:'./index.js',
    output:{
        path:'../build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/,
                include:__dirname
            }
        ]
    }
}