// TODO: Use Partial<T> to make all properties optional
type Todo = {
  title: string
  completed: boolean
}

type PartialTodo = Partial<Todo>

console.log({
  title: 'Learn TypeScript',
  completed: false,
} satisfies PartialTodo) // { title: 'Learn TypeScript', completed: false }
console.log({
  title: 'Learn TypeScript',
} satisfies PartialTodo) // { title: 'Learn TypeScript' }
console.log({
  completed: true,
} satisfies PartialTodo) // { completed: true }
