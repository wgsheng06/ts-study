/**
 * 函数参数和返回类型的注解
 */
// function getTotal(one: number, two: number): number {
//   // 加上number，返回值必须是number
//   return one + two
// }

// const total5 = getTotal(1, 2) // 如果不进行类型注释，鼠标放到total时无法进行类型推断的

function sayHello(): void {
  console.log('hello world')
  // return '' // void 和 return会报错
}

function errorFunction(): never {
  throw new Error()
  // 或者 while(true)
  console.log('hello world')
}

function add({ one, two }: { one: number; two: number }): number {
  return one + two
}
const b = add({ one: 1, two: 2 })
console.log(b) // 3
