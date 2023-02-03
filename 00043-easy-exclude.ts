/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 16:51:00
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-02 16:53:33
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
