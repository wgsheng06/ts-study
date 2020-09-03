/**
 * 类型注解与类型推断
 */

// type.annotation 类型注解
// type inference 类型推断

let const4: number
const4 = 123

let const4Inference = 123 // 直接定义值编辑器会自动进行类型推断

function getTotal(one: number, two: number) {
  return one + two
}

const total = getTotal(1, 2) // 如果不进行类型注释，鼠标放到total时无法进行类型推断的
