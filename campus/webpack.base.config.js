const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router', 'axios', 'echarts', 'js-cookie', 'html2canvas']
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist')
    },
    // 加载器
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /iview.src.*?js$/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.less/,
                loader: 'style!css!less?sourceMap'
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=1500&name=images/[name].[hash].[ext]'
            },
            {
                test: /\.(woff|eot|ttf|svg)\??.*$/,
                loader: 'url-loader?limit=1500000&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: [

    ]
};