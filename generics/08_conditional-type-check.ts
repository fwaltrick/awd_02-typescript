// TODO: Complete the type to return string if T extends string, else number
type TypeCheck<T> = T extends string ? string : number

type A = TypeCheck<'hello'> // string
type B = TypeCheck<42> // number

console.log({
  a: 'hello' satisfies A, // true
  b: 42 satisfies B, // true
  c: 'world' satisfies TypeCheck<string>, // true
  d: 100 satisfies TypeCheck<number>,
}) // true
