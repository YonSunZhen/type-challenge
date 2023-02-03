/*
 * @Author: yongzhen.sun
 * @Date: 2023-02-02 11:51:49
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-02-02 15:01:04
 * @Description: file content
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// ============= Your Code Here =============
// T[number] 用于从元组 T 中获取值
// 这里的 extends readonly any[] 是调用 T[number] 所必须的，用来约束 T 的类型， T 是一个元组，元组元素是只读的
type TupleToObject<T extends readonly any[]> = {
  [Value in T[number]]: Value
}

const test: TupleToObject<typeof tuple> = {
  'tesla': 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y'
}