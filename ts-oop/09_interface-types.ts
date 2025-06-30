// Task:
// - Create a type alias `Coordinates` with `x` and `y` properties.
// - Create an interface `Movable` with method `move(dx: number, dy: number): void`
// - Implement a class `Point` that uses both.

type Coordinates = {
  x: number
  y: number
}

interface Movable {
  move(dx: number, dy: number): void
}

class Point implements Coordinates, Movable {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  move(dx: number, dy: number): void {
    this.x += dx
    this.y += dy
  }
}

// Test
const point = new Point(0, 0)
point.move(5, 3)
console.log(point) // Should show updated x and y
point.move(7, -1)
console.log(point) // Should show updated x and y
