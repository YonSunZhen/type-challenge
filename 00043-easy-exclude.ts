/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 16:51:00
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-06 09:57:50
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
// 返回 T 中不存在于 U 的部分, 有点不好理解...
type MyExclude<T, U> = T extends U ? never : T

// 以下例子很奇怪 -- 这就是所谓的分配条件类型
// 如果 extends 前面的参数是一个泛型类型，当传入改参数的是联合类型，则使用分配律计算最终的结果
// 分配律是指：将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果
// 参考：https://juejin.cn/post/6998736350841143326
// type P<T> = T extends 'x' ? string : number;
// type A3 = P<'x' | 'y'>  // A3的类型是 string | number

// 防止条件判断中的分配
// type P<T> = [T] extends ['x'] ? string : number;
// type A1 = P<'x' | 'y'> // number
// type A2 = P<never> // string
