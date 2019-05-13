//require('../css/reset.css');//使用require是common.js语法
import '../css/reset.css';//使用import是ES6语法，两者都可以引入该模块
import '../css/index.scss';
import '../css/index.less';
//var sum=require('./module1.js');//common.js语法引入
import { sum,sum1 } from './module1.js';//ES6语法引入
var s=sum(1,2);
console.log(s);
var s1=sum1(10,20);
console.log(s1);

//var s=sum(5,6);
//console.log(s,'sum');
//var s1=sum1(22,33);
//console.log(s1);
import Vue from 'vue'
import App from './app.vue'


/* eslint-disable no-new */
//new Vue({
//el: '#app',
//components: { App },
//template: '<App/>'
//})

//runtime
new Vue({
  render: h => h(App)
}).$mount("#app")