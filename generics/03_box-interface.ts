// TODO: Turn this interface into a generic
interface Box<T> {
  value: T
}

// Verwendungsbeispiele:
const stringBox: Box<string> = { value: 'Hallo' }
const numberBox: Box<number> = { value: 42 }
const booleanBox: Box<boolean> = { value: true }

console.log(stringBox.value) // 'Hallo'
console.log(numberBox.value) // 42
console.log(booleanBox.value) // true
