/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-03 10:30:37
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-03 11:14:33
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]


// ============= Your Code Here =============
// 此时要了解一个新知识点，即 TS 判断中的 [number] 下标
// [number] 下标表示任意一项，而 extends T[number] 就可以实现数组包含的判定
// 以下方法有缺陷
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// 第一如何写 Equal 函数？比较流行的方案是这个
// type Equal<X, Y> = 
//   (<T>() => T extends X ? 1 : 2) extends
//   (<T>() => T extends Y ? 1 : 2) ? true : false
// 上面的代码构造了两个函数，这两个函数内的 T 属于 deferred（延迟）判断的类型，该类型的判断依赖于内部 isTypeIdenticalTo 函数完成判断

// const a: string = 'a'
// const b: string = 'b'
// type testEqual = Equal<typeof a, typeof b>

type Includes<T extends any[], K> = 
  T extends [infer F, ...infer Rest] ?
    Equal<F, K> extends true ?
      true
      : Includes<Rest, K>
    : false


