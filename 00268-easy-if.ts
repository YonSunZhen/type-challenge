/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-03 09:55:07
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-03 10:28:30
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>


// ============= Your Code Here =============
// 之前有提过，extends 还可以用来判定值，所以果断用 extends true 判断是否命中了 true 即可
type If<C extends Boolean, T, F> = C extends true ? T : F

const t: number = 1
const test: If<true, typeof t, 2> = 11
