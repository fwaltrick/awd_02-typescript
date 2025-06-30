function getLength(input: string | number): number {
  if (typeof input === 'string') {
    return (input as string).length
  } else {
    return input
  }
}

console.log(getLength('Hallo, Welt!')) // 12
console.log(getLength(62)) // 62
