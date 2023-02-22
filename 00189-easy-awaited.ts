/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 17:15:38
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-22 14:17:01
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>


// ============= Your Code Here =============
// unknown 表示类型还未确定
type MyAwaited<T extends PromiseLike<any>> = 
  T extends PromiseLike<infer P> ?  
    P extends PromiseLike<unknown> ? 
      MyAwaited<P> : P
  : T
