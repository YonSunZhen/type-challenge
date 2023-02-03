/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 11:38:18
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-02 11:44:03
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
