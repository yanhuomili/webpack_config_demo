const path = require('path');


module.exports = {
	mode:'none',//指定webpack构建的环境，可选值：development|production|none
	entry: "./main.js",//指定入口文件
    output: {
        path: path.join(__dirname,'./dist'),//指定入口文件
        // path指定了本地构建地址，publicPath指定在浏览器中所引用的,指定的是构建后在html里的路径
//      publicPath: '/dist/',
        filename: "main.js"//将打包后的文件命名为带hash的唯一文件，防止文件缓存
//      filename: "bundle.js"//指定打包后的文件名称
    },
}
