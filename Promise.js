// PromiseA+规范 https://promisesaplus.com/
//先写一个简单版本
// Promise 中有三种状态
const PADDING = 'padding'  // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败
class Promise {
	// 在new Promise时我们会传入一个函数，而且这个函数会立即执行
	// 首先创造一个constructor 接受一个参数
	constructor(exception) {
		// 传入的这个函数是要立即执行的,所以我们直接调用
		exception()
	}
}