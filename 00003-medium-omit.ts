import { Expect } from './test-utils';
/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-03 15:06:55
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-03 17:22:41
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  // description: never
  completed: boolean
}

interface Expected2 {
  title: string
}


// ============= Your Code Here =============
// type MyOmit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K>]: T[P]
// }

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
