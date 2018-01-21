module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './app/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    }
};
