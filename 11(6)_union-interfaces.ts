interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

type Shape = Square | Rectangle

const areaCalculators = {
  square: (shape: Square) => shape.size * shape.size,
  rectangle: (shape: Rectangle) => shape.width * shape.height,
}

function getArea(shape: Shape): number {
  const calculator = areaCalculators[shape.kind]
  return calculator(shape as never)
}

console.log(getArea({ kind: 'square', size: 5 })) // 25
console.log(getArea({ kind: 'rectangle', width: 4, height: 6 })) // 24
