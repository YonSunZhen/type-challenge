/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-22 11:07:38
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-22 11:15:40
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]


// ============= Your Code Here =============
// 有点东西，但不多...
type Last<T extends any[]> = T extends [...infer Q, infer P] ? P : never
