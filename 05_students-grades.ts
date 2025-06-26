type Student = {
  firstName: string
  lastName: string
  age: number
  grades: (
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | undefined
  )[]
}

const studentsData: Student[] = [
  {
    firstName: 'Anton',
    lastName: 'Meier',
    age: 16,
    grades: [1, 4, 3, 1, 'A', undefined, 1, 2],
  },
  {
    firstName: 'Berta',
    lastName: 'Müller',
    age: 17,
    grades: ['A', undefined, 1],
  },
  {
    firstName: 'Cäsar',
    lastName: 'Schmidt',
    age: 17,
    grades: ['A', 1, undefined, 3, 2, 4, 5],
  },
]

function gradesStudents(students: Student[]): void {
  students.map((student) => {
    const separator = '='.repeat(
      student.firstName.length + student.lastName.length + 6,
    )
    const formattedGrades = student.grades
      .map((grade) => (grade === undefined ? '* ' : grade))
      .join(', ')
    const output = `${student.firstName} ${student.lastName} (${student.age})
${separator}
Noten:
${formattedGrades}

`
    console.log(output)
  })
}

gradesStudents(studentsData)
