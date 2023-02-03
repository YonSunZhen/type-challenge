/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-03 12:01:54
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-03 12:10:16
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]


// ============= Your Code Here =============
// infer 可以很方便从任何具体的位置取值，属于典型难懂易用的语法
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : []
