const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
//	mode:'none',//指定webpack构建的环境，可选值：development|production|none
	entry: "./src/main.js",//指定入口文件
    output: {
        path: path.resolve(__dirname,'./dist'),//指定输出文件
        // path指定了本地构建地址，publicPath指定在浏览器中所引用的,指定的是构建后在html里的路径,跟上面的path无关
//      publicPath: './dist',
        publicPath: '',
        filename: "index.js"//指定打包后的文件名称 
//      filename: "[name].[hash].js"//将打包后的文件命名为带hash的唯一文件，防止文件缓存
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '配置webpack', // 用于生成的HTML文档的标题
            filename: 'index.html', //写入HTML的文件。默认为index.html。也可以指定一个子目录（例如：）assets/admin.html
            template: 'index.html' // Webpack需要模板的路径
        }),
    ]
}
