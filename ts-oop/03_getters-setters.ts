// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').

class UserProfile {
  private _email: string

  constructor(email: string) {
    this._email = email
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    if (!value.includes('@')) {
      throw new Error('Invalid email address')
    }
    this._email = value
  }
}

// Test
const user = new UserProfile('john@example.com')
console.log(user.email) // Should return valid email
user.email = 'wrongemail' // Should throw an error
