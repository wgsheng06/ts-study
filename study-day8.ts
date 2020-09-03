/**
 * 接口interface 的使用
 */
/**
 * 简历筛选
 * @param name
 * @param age
 * @param bust
 */

interface Girl {
  name: string
  age: number
  bust: number
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 89,
}

// const screenResume = (name: string, age: number, bust: number): void => {
//   age < 24 && bust >= 90 && console.log(name + '进入面试')
//   age >= 24 || (bust < 90 && console.log(name + '你被淘汰'))
// }

// const getResume = (name: string, age: number, bust: number) => {
//   console.log(name + '年龄是: ' + age)
//   console.log(name + '胸围是: ' + bust)
// }

const screenResume = (girl: Girl): void => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
  girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'))
}
const getResume = (name: string, age: number, bust: number) => {
  console.log(name + '年龄是: ' + age)
  console.log(name + '胸围是: ' + bust)
}

// screenResume('大脚', 18, 89)
// getResume('大脚', 18, 89)
