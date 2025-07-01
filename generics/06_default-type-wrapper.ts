// TODO: Provide a default type for the generic parameter
function wrapValue<T = string>(val?: T): T[] {
  return val !== undefined ? [val] : []
}

const defaultWrapped = wrapValue() // should infer type
console.log(defaultWrapped) // []
console.log(wrapValue('Hello')) // ["Hello"]
