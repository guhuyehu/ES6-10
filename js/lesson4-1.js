// async 返回的是一个promise对象
// async function firstAsync () {
//   return 27 // 会处理成Promise.resolve(27)
// }
//
// // firstAsync().then(val => {
// //   console.log(val)
// // })
//
// console.log(firstAsync() instanceof Promise)

async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('now it is done')
    }, 1000)
  })
  // await 后面必须跟promise对象 如果不是会自动转化为promise对象
  console.log(await promise)
  console.log(await Promise.resolve(40))
  console.log(2)
  return Promise.resolve(3)
}

firstAsync().then(val => {
  console.log(val)
})
