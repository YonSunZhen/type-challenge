// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
// 由于 TS 支持数组解构语法，所以可以大胆的尝试这么写
type Concat<T extends any[], U extends any[]> = [
  ...T extends any[] ? T : [T],
  ...U extends any[] ? U : [U]
]
