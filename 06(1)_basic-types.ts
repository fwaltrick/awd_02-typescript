interface User {
  id: number
  name: string
  email: string
}

const getUserInfo = (user: User): string => {
  return `User ${user.id}: ${user.name} (${user.email})`
}

const beth: User = {
  id: 13,
  name: 'Beth',
  email: 'hibeth@gmail.com',
}

console.log(getUserInfo(beth))
