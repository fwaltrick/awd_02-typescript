function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number,
): number {
  return operation(a, b)
}

// Example operations
const add = (x: number, y: number): number => x + y
const subtract = (x: number, y: number): number => x - y
const multiply = (x: number, y: number): number => x * y
const divide = (x: number, y: number): number => x / y

// Using the applyOperation function with different operations
console.log(applyOperation(10, 5, add)) // 15
console.log(applyOperation(10, 5, subtract)) // 5
console.log(applyOperation(10, 5, multiply)) // 50
console.log(applyOperation(10, 5, divide)) // 2
