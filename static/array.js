// for循环
const arr = [1, 2, 3, 4, 5]
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}
// forEach
arr.forEach(item => {
  // console.log(item)
})
// every 默认返回false 如果返回false遍历中止
arr.every(item => {
  // console.log(item)
})
// for in 数组最好别用
// arr.a = 8
// for (let index in obj) {
//   console.log(index)
// }
// for of
for (const item of arr) {
  console.log(item)
}

// 转换 Array.from(arrayLike, mapFn, thisArg)

// 填充数组 fill(value, start, end)
// let arr1 = Array(5).fill(1)
// console.log(arr1)

// find&filter  find为找到就停止返回找到的符合项 filter为全部符合项 findIndex找到符合项的index 没有返回-1
