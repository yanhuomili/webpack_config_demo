//const chalk = require('chalk');
//console.log(chalk.green('开始打包项目'));
//
////const ora=require('ora');
////const spinner=ora('正在打包中...').start();
////spinner.color='yellow';
////setTimeout(()=>{
////	spinner.color='blue';
////	spinner.text='loading....';
////},2000);
////setTimeout(()=>{
////	spinner.color='green';
////	spinner.text='项目打包完成';
////	spinner.stop();
////},5000);
//
//var inquirer = require('inquirer');
//inquirer.prompt([{type: 'confirm', name: 'OK', message: 'Are you OK?', default: true}]).then(answers => {
//  console.log(answers);
//});



/*编写指令和处理命令行的*/
//const program = require("commander");
//// 定义指令
//program
// .version('0.0.1')
// .command('init', 'Generate a new project from a template')
// .action(() => {
// // 回调函数
// })
//// 解析命令行参数
//program.parse(process.argv);
//

/*这是个强大的交互式命令行工具*/
//const inquirer = require('inquirer');
//inquirer
// .prompt([
// // 一些交互式的问题
// ])
// .then(answers => {
// // 回调函数，answers 就是用户输入的内容，是个对象
// });

/*这是用来修改控制台输出内容样式的*/
const chalk = require('chalk');
console.log(chalk.green('success'));
console.log(chalk.red('error'));


/*这是一个好看的加载，就是你下载的时候会有个转圈圈的那种效果*/
const ora = require('ora')
let spinner = ora('downloading template ...')
spinner.start()

/*这是用来下载远程模板的*/
const download = require('download-git-repo')
download(repository, destination, options, callback)