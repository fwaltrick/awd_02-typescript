// TODO: Make this function generic so it returns the same type as its input
function identity<T>(arg: T): T {
  return arg
}
console.log(identity(5)) // 5
console.log(identity('Hello')) // 'Hello'
console.log(identity(true)) // true
console.log(identity({ name: 'Carmen' })) // { name: 'Carmen' }
