interface StringMap {
  [key: string]: string
}

function printValues(obj: StringMap): void {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
  }
}

const example: StringMap = {
  name: 'Jaime',
  home: 'PeachTree',
  email: 'jaime@peach.com',
}

printValues(example)
