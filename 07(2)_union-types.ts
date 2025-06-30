type Status = 'active' | 'inactive' | 'pending'

interface Account {
  username: string
  status: Status
  lastLogin?: Date
}

const isActive = (account: Account): boolean => {
  return account.status === 'active'
}

const accounts: Account[] = [
  { username: 'bart89', status: 'active' },
  { username: 'lisalisa', status: 'pending' },
  { username: 'bob621', status: 'inactive', lastLogin: new Date('2024-10-03') },
]

accounts.forEach((account) => {
  console.log(
    `Account ${account.username} is ${
      isActive(account) ? 'active' : 'not active'
    }`,
  )
})
