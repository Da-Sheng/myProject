const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { ThemedProgressPlugin } = require('themed-progress-plugin')

const devConfig = {
    devServer: {
        // historyApiFallback 设置为 true 时,当路由跳转到不存在的路径时
        // 会自动重定向到 index.html,用于支持前端路由(如 React Router)
        historyApiFallback: true,
        static: path.resolve(__dirname, '../dist'),
        port: 9000,
    },
    output: {
        publicPath: '/',
        filename: 'scripts/[name].bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.dev.html'),
            filename: 'index.html',
        }),
        // new BundleAnalyzerPlugin(),
        new ThemedProgressPlugin(),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:9000'],
                notes: ['Note that the development build is not optimized.']
            },
            onErrors: (severity, errors) => {
                if (severity !== 'error') return
                const error = errors[0]
                notifier.notify({
                    title: 'Webpack Error',
                    message: severity + ': ' + error.name,
                    subtitle: error.file || '',
                    sound: true
                })
            }
        })
    ]
}

module.exports = devConfig