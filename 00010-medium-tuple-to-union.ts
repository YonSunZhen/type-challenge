/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-22 10:49:37
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-22 11:02:28
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


// ============= Your Code Here =============
type TupleToUnion<T extends any[]> = T[number]
