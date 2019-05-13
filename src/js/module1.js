export function sum(x,y){
	return x+y;
}
const sum1=(x,y)=>{
	return x+y;
}

export {
	sum1
}
//module.exports = sum;//common.js语法,使用require()方式引入

//export default{//ES6语法，使用import a from 'xxxxx'方式引入
//	sum
//}

//export function(){};//ES6语法，使用import { a } from 'xxxx'方式引入
