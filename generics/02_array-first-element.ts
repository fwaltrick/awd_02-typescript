// TODO: Write a generic function that returns the first element of an array
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

console.log(getFirst([1, 2, 3])) // 1
console.log(getFirst(['a', 'b', 'c'])) // 'a'
console.log(getFirst([true, false, true])) // true
console.log(getFirst([{ name: 'Alice' }, { name: 'Bob' }]))
