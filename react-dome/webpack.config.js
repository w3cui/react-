const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    port = '8020';

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/main.jsx')
    ],
    output: {
        publicPath: "/build/",
        path: BUILD_DIR,
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },

    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）

        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        // 用于查找模块的目录

        extensions: [".js", ".json", ".jsx", ".css"],
        // 使用的扩展名

        alias: {
            // 模块别名列表

            "@": APP_DIR
            // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"

        }
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: [{
                loader: "babel-loader",
            }]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                APP_DIR
            ]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?modules'
            }),
            include: [
                APP_DIR
            ]
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?!less-loader'
            }),
            include: [
                APP_DIR
            ]
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?!sass-loader'
            }),
            include: [
                APP_DIR
            ]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[hash:7].[ext]'
            }
        }, ]
    },
    devServer: {
        contentBase: BUILD_DIR,
        open : true,
        port: port,
        inline: false
    },
    plugins: [
        //缩小打包体积
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //分离打包后的css文件
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true
        }),
        //指定自动开启服务的浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:' + port + ''
        })
    ]
}