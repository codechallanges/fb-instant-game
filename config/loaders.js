module.exports = function () {
    return [{
            test: /\.(jsx|js)?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ['env', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        },
    ]
}