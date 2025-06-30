// Task: Create a base class `Employee` with:
// - name: string
// - getDetails(): string

// Create a derived class `Manager` that adds:
// - department: string
// - Overrides getDetails() to include department

class Employee {
  name: string

  constructor(name: string) {
    this.name = name
  }

  getDetails(): string {
    return `Employee Name: ${this.name}`
  }
}

class Manager extends Employee {
  department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`
  }
}

// Test
const manager = new Manager('Alice', 'Engineering')
console.log(manager.getDetails())
