/*
 * @Author: WangHeYao
 * @Date: 2021-08-04 13:58:06
 */

// 首先Promise是这样使用的
// new Promise((resolve,reject)=>{......})

// Promise存在三个状态（state）pending、fulfilled、rejected
// pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
// 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
// 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）
// new Promise((resolve, reject)=>{resolve(value)}) resolve为成功，接收参数value，状态改变为fulfilled，不可再次改变。
// new Promise((resolve, reject)=>{reject(reason)}) reject为失败，接收参数reason，状态改变为rejected，不可再次改变。
// 若是fn函数报错 直接执行reject();
// 这样我们就直接定义这三个状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 从使用方法来看 Promise 肯定是一个类，我们就用class来声明。
class Promise {
  // new Promise 时传入了一个类型为函数的参数 这里就设置为 fn 并且传入就执行
  constructor(fn) {
    // 初始化state为等待态
    this.state = PENDING;
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // resolve和reject是可执行的，所以都是函数
    // 成功函数
    let resolve = (value) => {
      // state改变,resolve调用就会失败
      if (this.state === PENDING) {
        // resolve调用后，state转化为成功态
        this.state = FULFILLED;
        // 储存成功的值
        this.value = value;
      }
    }
    
    // 失败函数
    let reject = (reason) => {
      // state改变,reject调用就会失败
      if(this.state === PENDING) {
        // reject调用后，state转化为失败态
        this.state = REJECTED
        // 储存失败的原因
        this.reason = reason
      }
    }

    // fn 里面有两个参数,分别为 resolve和reject
    // 若是fn函数报错 直接执行reject();
    try {
      fn(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  // .then
  then(onFulfilled, onRejected) {

  }
}