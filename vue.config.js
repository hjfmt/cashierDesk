const path = require('path');
module.exports = {
    // baseUrl:'/jiangsu/testentrance/sjfhtest/web/',

    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@as', resolve('src/assets'))
            .set('@cp', resolve('src/components'))
            .set('@service', resolve('src/service'))
            .set('@static', resolve('src/static'))
            .set('@views', resolve('src/views'))
            .set('@img', '/img')
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('css').oneOf(type)))
    },
    devServer:{
        disableHostCheck:true,
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:18081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            },
            '/img': {
                target: 'http://www.geeshu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/img': ''
                }
             }
        }
    },
}

// alias
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 全局引入mixin
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/static/css/common.css'),
            ],
        })
}
