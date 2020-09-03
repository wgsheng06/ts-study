/**
 * 基础静态类型与对象静态类型
 */
// 基础静态类型
const num: number = 2
const myName: string = 'wgsheng'
// undefined null boolean void symbol

// 对象静态类型
const xiaojiejies: {
  name: string
  age: number
} = {
  name: '大脚',
  age: 20,
}
const xiaojiejie2: string[] = ['小红']
class Person {}
const dajiao: Person = new Person()
const xiaoJieJie: () => string = () => '小红'

// 大概共4种 对象类型 数组类型 类类型 函数类型
