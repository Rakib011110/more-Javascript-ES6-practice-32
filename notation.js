const student = {

    name: 'kolim uddin',
    age: 14,
    class: "Ten",
    marks: {
        math: "78",
        physics: 89,
        chemistry: "65",
    }
}
const mark = student.marks
const math = student.marks.math
const subject = 'math'
const chemestry = student['marks']['chemistry']
const subjectMarks = student.marks[subject]
console.log(subjectMarks);