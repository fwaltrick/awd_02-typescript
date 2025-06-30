function snail<T>(matrix: T[][]): T[] {
  // Ergebnisarray
  const output: T[] = []

  while (matrix.length) {
    // Solange die Matrix Zeilen hat
    // Erste Zeile hinzufügen
    output.push(...matrix.shift()!)

    // Letztes Element jeder verbleibenden Zeile hinzufügen
    for (let i = 0; i < matrix.length; i++) {
      output.push(matrix[i].pop()!)
    }

    // Letzte Zeile umgekehrt hinzufügen, falls vorhanden
    if (matrix.length) {
      output.push(...matrix.pop()!.reverse())
    }

    // Erstes Element jeder verbleibenden Zeile umgekehrt hinzufügen
    for (let i = matrix.length - 1; i >= 0; i--) {
      output.push(matrix[i].shift()!)
    }
  }

  return output
}

console.log(
  snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]),
)
