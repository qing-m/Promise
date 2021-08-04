/*
 * @Author: WangHeYao
 * @Date: 2021-08-04 13:58:06
 */

// 首先Promise是这样使用的
// new Promise((resolve,reject)=>{......})

// 从使用方法来看 Promise 肯定是一个类，我们就用class来声明。
class Promise {
  // new Promise 时传入了一个类型为函数的参数 这里就设置为 fn 并且传入就执行
  constructor(fn) {
    fn()
  }
}
