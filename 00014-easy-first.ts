/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 14:52:46
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-02 14:58:37
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
type First<T extends any[]> = T extends [] ? never : T[0]
type arr = [string, 1]
const test: First<arr> = '1'
