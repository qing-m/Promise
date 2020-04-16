// 写之前要先了解Promis的用法.

new Promise((reslove,reject) => {  // Promise对象接受一个函数，函数中有两个参数，当new Promise时会立即执行里面的代码
	console.log('test1')
	// reslove(`reslove-promise`) // 当reslove时执行的是.then的第一个参数
	reject(`reject-promise`)  // 当reject时执行的是第二个参数
	console.log('test2')
}).then((res)=>{
	console.log(`reslove ${res}`)
},(err)=>{
	console.log(`reject ${err}`)
})