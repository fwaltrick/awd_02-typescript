// TODO: Only allow types that have a 'length' property
function printLength<T extends { length: number }>(item: T): number {
  return item.length
}

console.log(printLength([1, 2, 3])) // 3
console.log(printLength('Hello')) // 5
