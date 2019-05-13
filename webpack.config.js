//node.js的核心模块，用于操作文件路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');//webpack4.0后配置vue-loader需要用到该插件

module.exports = {
    entry: "./src/js/main.js",//指定入口文件
    output: {
        path: path.resolve(__dirname,'./dist/js'),//指定入口文件
        // path指定了本地构建地址，publicPath指定在浏览器中所引用的,指定的是构建后在html里的路径
        // publicPath: './',
        filename: "[name].[hash].js"//将打包后的文件命名为带hash的唯一文件，防止文件缓存
//      filename: "bundle.js"//指定打包后的文件名称
    },
    module: {
    	rules:[
			{
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {}
                }
           },
            {
		        test: /\.css$/,
		        use: [
		          MiniCssExtractPlugin.loader,//注意这边
		          "css-loader"
		        ]
		      },
	    	{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},//sass-loader,转换scss文件
	    	{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},//less-loader,转换less文件
	    	{
                // 图片和字体文件使用 url-loader 来处理
	                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
	                use: [
	                    {
	                        loader: 'url-loader',
	                        // options 为可以配置的选项
	                        options: {
//	                            limit: 8192
	                            // limit=8192表示将所有小于8kb的图片都转为base64形式（为什么  呢？因为一个很小的图片，不值当的去发送一个请求，减少请求次 数。）
	                            // （其实应该说超过8kb的才使用 url-loader 来映射到文件，否则转为dataurl形式）
	                        }
	                    }
	              ]
	               //保证输出的图片名称与之前命名的图片名称保持一致(目前只是支持这样的写法，webpack3 没有响应的options进行配置)
	             // use:'url-loader?limit=8192&name=imgs/[name].[ext]' 
	       },
	       {
	            test: /\.js$/,
	            exclude: /(node_modules)/,  // exclude 排除的意思，把 node_modules文件夹排除编译之外
	            use: {
	                loader: 'babel-loader',
	                options: {
		                // presets 预设列表（一组插件）加载和使用
		                presets: ['env'],
		                plugins: ['transform-runtime'] // 加载和使用的插件列表
                	}
            	}
	       }
    	]
   	},
    devServer: {
         // contentBase: './dist', // 在 localhost:8080(默认) 下建立服务，将 dist 目录下的文件，作为可访问文件  contentBase：告诉服务器从哪里提供内容
         // 或者通过以下方式配置
         contentBase: path.join(__dirname, "dist"),
         compress: true,
         // 当它被设置为true的时候对所有的服务器资源采用gzip压缩
         // 对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
         port: 9000, // 如果想要改端口，可以通过 port更改
//       hot: true, // 启用 webpack 的模块热替换特性()。注释掉这条配置反而可以热更新
         inline: true, // 实现实时重载（实现自动刷新功能）默认情况下是 true。
         host: "localhost" // 如果你希望服务器外部可访问，指定使用一个 host。默认是 localhost(也就是你可以不写这个host这个配置属性)。
    },
   	plugins: [
		new MiniCssExtractPlugin({
            filename: "[name].css",////都提到build目录下的css目录中
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'webpack配置的title', // 用于生成的HTML文档的标题
            filename: 'index.html', //写入HTML的文件。默认为index.html。也可以指定一个子目录（例如：）assets/admin.html
            template: 'index.html' // Webpack需要模板的路径
        }),
        new webpack.HotModuleReplacementPlugin(), // 需要结合 启用热替换模块(Hot Module Replacement)，也被称为 HMR
        new VueLoaderPlugin()//webpack4.0之后配置vue-loader需要用到该插件
    ]
};