/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-06 15:55:49
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-06 16:17:29
 * @Description: file content
 */
// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============
// K extends keyof T = keyof T -- 这是什么骚操作
// 可以将对象一分为二，先 Pick 出 K Key部分设置为 Readonly，再用 & 合并上剩下的 Key（利用 Pick 和 Omit）
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>