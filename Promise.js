// Promise 中有三种状态
const PADDING = 'padding'  // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败
class Promise {
	// 在new Promise时我们会传入一个函数，而且这个函数会立即执行
	// 首先创造一个constructor 接受一个参数
	constructor(exception) {
		// 设置status的默认值为'paddin'
		this.status = PADDING
		// 成功的值
		this.value = '' 
		// 失败的值
		this.reason = ''

		let reslove = (value) => {
			if (this.status === PADDING) {
					// resolve调用后，state转化为成功态
					this.status = FULFILLED;
					// 储存成功的值
					this.value = value;
			}
		}

		let reject = (reason) => {
			if(this.status === PADDING) {
				// reject调用后staus转为失败状态
				this.status = REJECTED
				// 储存失败的值
				this.reason = reason
			}
		}

		try {
			// 传入的这个函数是要立即执行的,在调用之前我们要判断用户传入的是否时函数，不是函数直接扔出错误
			exception(reslove,reject)
		}catch {
			reject('is not function')
		}
	}

	then(onFulfilled,onRejected) {
		// 当reslove时执行第一个参数onFulfilled
		// 当reject时执行第二个参数onRejected
		//所以我们要判断一下执行
		if(this.status === FULFILLED) {
			return onFulfilled(this.value)
		}
		if(this.status === REJECTED) {
			return onRejected(this.reason)
		}
	}
}

new Promise((reslove,reject) => {
	reslove(1)
}).then((res)=>{
	console.log(`reslove ${res}`)
},(err)=>{
	console.log(`reject ${err}`)
})