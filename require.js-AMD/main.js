// js/mian.js
// 全局配置
require.config({
  // 根路径设置，paths下面全部都是根据baseUrl的路径去设置
  baseUrl:'./js',
  paths: { // 定义引用时名称对应的路径
    m1: 'm1',
    m2: 'm2',
    lodash: 'lodash'
  },
  // 用来配置不兼容的模块，意思是：该模块没有module.exports
  // shim:{
  //   'lodash': {
  //     exports: '_'
  //   }
  // }
})

define('main', function() {
  require(['m1'], function(m1) {
    console.log('name: ', m1.name);
    console.log('add: ', m1.add(2, 8));
  });
})
