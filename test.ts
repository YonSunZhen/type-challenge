


interface Info {
  name: string;
  age: number;
}

interface Detail {
  people: {
    name: string;
    age: number;
  }[]
}

// 数组类型遍历
type haha = Detail['people'][number] & { id: string }

// const haha: haha = {
//   ''
// }