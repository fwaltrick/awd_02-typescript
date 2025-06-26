let age: number = 30

for (let i = 1; i <= age; i++) {
  console.log(`They are ${i} years old.`)
}

if (age > 18) {
  console.log('They are an adult.')
} else {
  console.log('They are not an adult.')
}

let score: number = 0

if (score !== 0) {
  console.log('Score is available.')
}

if (score) {
  console.log('Score is truthy.')
} else {
  console.log('Score is falsy.')
}

let username: string = ''
if (username) {
  console.log('Username is available.')
}
if (!username) {
  console.log('Username is falsy.')
} else {
  console.log('Username is truthy.')
}

let isAdmin: boolean = false

if (isAdmin) {
  console.log('isAdmin is evaluated as truthy.')
} else {
  console.log('isAdmin is evaluated as falsy.')
}
