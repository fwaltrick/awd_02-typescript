function tree(levels: number): void {
  for (let i = 0; i <= levels; i++) {
    const spaces = ' '.repeat(levels - i)
    const leaves = '*'.repeat(2 * i + 1)
    const branches = spaces + leaves
    console.log(branches)
  }
}

tree(5)
