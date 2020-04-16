const PADDING = 'PADDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
let Promise2
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
			return Promise2 = new Promise((reslove,reject) => {
				try {
					let x = onFulfilled(this.value)
					reslove(x)
				} catch (error) {
					reject(error)
				}
			})
		}
		if(this.status === REJECTED) {
			return Promise2 = new Promise((reslove,reject) => {
				try {
					let x = onRejected(this.reason)
					reslove(x)
				} catch (error) {
					reject(error)
				}
			})
		}
		if(this.status === PADDING) {
			return Promise2 = new Promise((reslove,reject) => {
				
			})
		}
	}
}



new Promise((reslove,reject) => {
	reject(1)
}).then((res)=>{
	console.log(`reslove ${res}`)
},(err)=>{
	console.log(`reject ${err}`)
}).then((res)=>{
	console.log(`next res`)
},(err)=>{
	console.log('next err')
})