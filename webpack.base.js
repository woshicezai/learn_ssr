//webpack.base.js
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            //.babelrc里有了
           /* options: {
                presets: ['@babel/preset-react',  ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 versions']
                    }
                }]]
            }*/
        }]
    }
}

