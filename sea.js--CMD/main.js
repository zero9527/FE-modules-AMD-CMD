// js/mian.js
define(function(require, exports, module) {
  var m1 = require('m1');
  console.log(m1.add(2,8));

  // 单独导出
  exports.init = function init() {
    console.log('init');
  }

  // 或者 先定义，再统一导出
  // function init() {
  //   console.log('init');
  // }
  // module.exports = {
  //   init: init
  // }
});
