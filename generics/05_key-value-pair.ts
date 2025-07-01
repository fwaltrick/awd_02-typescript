// TODO: Complete the function to return a key-value tuple
function createPair<K, V>(key: K, value: V): [K, V] {
  return [key, value]
}

console.log(createPair('name', 'Alice')) // ['name', 'Alice']
console.log(createPair(1, 42)) // [1, 42]
console.log(createPair(true, 'isActive')) // [true, 'isActive']
console.log(createPair({ id: 1 }, [1, 2, 3])) // [{ id: 1 }, [1, 2, 3]]
