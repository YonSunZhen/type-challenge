/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 10:59:55
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-02 11:44:59
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
// A extends keyof B
// { [A in keyof B]: B[A] }
// T K P
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
  // [P in keyof T]: T[P]
}
