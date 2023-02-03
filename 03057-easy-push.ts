/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-03 11:23:55
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-03 11:59:22
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]


// ============= Your Code Here =============
type Push<T extends any[], U> = [...T, U]
