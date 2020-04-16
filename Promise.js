const PADDING = 'PADDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
	constructor(exception) {
		this.status = PADDING

		this.value = undefined
		this.reason = undefined
		let reslove = (value) => {
			if(this.status === PADDING) {
				this.status = FULFILLED
				this.value = value
			}
		}

		let reject = (err) => {
			if(this.status === PADDING) {
				this.status = REJECTED
				this.reason = err
			}
		}
		
		try {
			exception(reslove,reject)
		} catch (error) {
			reject(error)
		}
	}

	then(onFulfilled,onRejected) {
		if(this.status === FULFILLED) {
			onFulfilled(this.value)
		}
		if(this.status === REJECTED) {
			onRejected(this.reason)
		}
	}
}



new Promise((reslove,reject) => {
	reject(1)
}).then((res)=>{
	console.log(`reslove ${res}`)
},(err)=>{
	console.log(`reject ${err}`)
})