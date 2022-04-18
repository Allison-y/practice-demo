// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class PromiseMe {
//   constructor (executor) {
//     this.status = PENDING

//     // const resolve = data => {
//     //   if (this.status === PENDING) {
//     //     this.status = FULFILLED
//     //     this.value = data
//     // this.onResolvedCallbacks.forEach(f=>f(this.value))
//     //   }
//     // }

//     // const reject = reason => {
//     //   if (this.status === PENDING) {
//     //     this.status = REJECTED
//     //     this.value = reason
//     //   }
//     // }

//     // 设置两个数组来存放回调函数
//     this.onResolvedCallbacks = [] // 存放成功后执行的回调函数
//     this.onRejectedCallbacks = [] // 存放失败后执行的回调函数

//     // try {
//     //   executor(resolve, reject)
//     // } catch (error) {
//     //   reject(error)
//     // }
//   }

//   then (onFulfilled, onRejected) {
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
//     onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
//     // 如果代码执行到这，onFulfilled和onRejected必定为函数
//     let promise2
//     // 在执行then时，如果此时的Promise状态还是pending，就把方法push到上述的数组里。
//     if (this.status === PENDING) {
//       promise2 = new PromiseMe((resolve, reject) => {
//         this.onResolvedCallbacks.push(onFulfilled)
//         this.onRejectedCallbacks.push(onRejected)
//       })
//     }

//     // 如果在给 Promise通过then绑定回调函数时,Promise的状态已经是FULFILLED时,我们就直接执行传进来的回调函数

//     // onFulfilled和onRejected这些回调函数必须异步调用
//     if (this.status === FULFILLED) {
//       const timer = setTimeout(() => {
//         clearTimeout(timer)
//         onFulfilled(this.value)
//       })
//     }
//     if (this.status === REJECTED) {
//       const timer = setTimeout(() => {
//         clearTimeout(timer)
//         onRejected(this.value)
//       })
//     }
//   }
// }

// const p = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve(1)
//   },1_000)
// }).then(v=>{
//   v;
//   return 2
// }).then
