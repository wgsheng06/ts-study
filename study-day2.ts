/**
 * 静态类型
 */
let count: number = 1 // count = 'leo'  //不能直接修改数据类型。会报错
count = 2 // count. 通过点可以看到number的所有方法

interface XiaoJieJie {
  // 自定义静态类型
  name: string
  age: number
}

const xiaojiejie: XiaoJieJie = {
  name: 'xiaohong',
  age: 20,
}

console.log(xiaojiejie.age)
