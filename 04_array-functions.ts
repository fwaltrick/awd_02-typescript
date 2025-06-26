const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194]

const result: number = list
  .sort((a: number, b: number) => b - a)
  .map((num: number) => num * num)
  .slice(4, -2)
  .filter((num: number) => num % 4 !== 0)
  .reduce((acc: number, cur: number) => acc + cur, 0)

console.log('Result:', result)
