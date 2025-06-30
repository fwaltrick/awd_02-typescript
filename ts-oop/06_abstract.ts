// Task: Create an abstract class `Shape` with:
// - abstract method `getArea(): number`
// - name: string

// Create subclasses `Rectangle` and `Circle` that implement getArea.

abstract class Shape {
  name: string

  constructor(name: string) {
    this.name = name
  }
  abstract getArea(): number
}

class Rectangle extends Shape {
  width: number
  height: number

  constructor(width: number, height: number) {
    super('Rectangle')
    this.width = width
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }
}

class Circle extends Shape {
  radius: number

  constructor(radius: number) {
    super('Circle')
    this.radius = radius
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100
  }
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)]
shapes.forEach((shape) => console.log(`${shape.name} area: ${shape.getArea()}`))
