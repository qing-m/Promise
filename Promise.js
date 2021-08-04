/*
 * @Author: WangHeYao
 * @Date: 2021-08-04 13:58:06
 * @LastEditTime: 2021-08-04 14:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Promise\Promise.js
 */
const p1 = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('p1')
      resolve()
    }, 1000);
  })
}
const fun1 = () => {
  console.log('fun1')
}
// p1.then((res)=>{
//   fun1()
// }).catch((err)=>{
//   console.log(err)
// })

const fun2 = async () => {
  await p1()
  fun1()
}
fun2()