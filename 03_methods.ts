// Methoden in TypeScript

// Map Beispiel
const numbers: number[] = [9, 12, 15, 18, 21]

const doubleNumbers: number[] = numbers.map((num: number) => num * 2)

// Filter Beispiel
const words: string[] = ['deutsch', 'als', 'fremdsprache']

const moreThanFiveChars: string[] = words.filter(
  (word: string) => word.length > 5,
)

// Reduce Beispiel
const ages: number[] = [12, 15, 18, 21, 24]

const sumAges: number = ages.reduce((acc: number, cur: number) => acc + cur, 0)

// Some Beispiel
const prices: number[] = [2.99, 5.49, 8.0, 21.5, 24.99]

const morethanTen: boolean = prices.some((price: number) => price > 10)

// Ausgabe der Ergebnisse
console.log(doubleNumbers)
console.log(moreThanFiveChars)
console.log(sumAges)
console.log(morethanTen)
