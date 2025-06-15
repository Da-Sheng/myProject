// 引入用于JavaScript代码压缩的插件
const TerserPlugin = require('terser-webpack-plugin')
// 引入用于CSS代码压缩的插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 引入Node.js的路径处理模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // 设置为生产环境模式
    mode: 'production',
    // 配置外部依赖，不打包到bundle中
    externals: {
        'react': 'React',         // 将React库映射到全局变量React,表示使用外部CDN加载的React而不是打包到bundle中
        'react-dom': 'ReactDOM',  // 将ReactDOM库映射到全局变量ReactDOM,表示使用外部CDN加载的ReactDOM
        'react-dom/client': 'ReactDOM', // 将react-dom/client也映射到ReactDOM,因为它是ReactDOM的一部分
    },
    output: {
        // 设置输出目录为dist
        path: path.resolve(__dirname, '../dist'),
        // 设置资源的公共访问路径
        publicPath: '/',
        // 设置JS文件输出名称格式,包含内容hash以便缓存
        filename: 'scripts/[name].[contenthash:8].bundle.js',
        // 设置资源模块的输出名称格式
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    performance: {
        // 当资源超过限制时显示警告
        hints: 'warning',
        // 设置单个资源体积的最大限制(约250KB)
        maxAssetSize: 250000,
        // 设置入口资源体积的最大限制(约250KB)
        maxEntrypointSize: 250000
    },
    optimization: {
        // 启用代码压缩
        minimize: true,
        minimizer: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.prod.html'),
                filename: 'index.html',
            }),
            new TerserPlugin({
                // 启用多进程并行压缩
                parallel: true,
                terserOptions: {
                    compress: {
                        // 移除console相关代码
                        drop_console: true
                    }
                }
            }),
            new CssMinimizerPlugin({
                // 启用多进程并行压缩
                parallel: true,
                minimizerOptions: {
                    // 使用默认压缩预设
                    preset: [
                        'default', {}
                    ]
                }
            })
        ]
    }
}