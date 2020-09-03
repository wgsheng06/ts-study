/**
 * 数组类型注解的方法
 */
const numberArr: number[] = [1, 2, 3]
const strArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [, , ,]
const arr: (number | string)[] = [1, 'a', undefined, , null]

// type alias 类型别名
type Lady = {
  name: string
  age: number
}
class Madom {
  name: string
  age: number
}

// 用Lady[] Madon[] 都可以
const XiaoJieJie6: Madom[] = [
  {
    name: '球球',
    age: 18,
  },
]
