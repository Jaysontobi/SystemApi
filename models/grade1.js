const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let grade1Schema = new Schema({
  schoolYear: {
    type: String
    },
  subjects: [{
    subjectName: String,
    subjectGrade: {
        firstQuarter: Number,
        secondQuarter: Number,
        thirdQuarter: Number,
        fourthQuarter: Number
    },
    teacher: {
        idNumber: String,
        firstName: String,
        middleName: String,
        lastName: String,
        gender: String,
        gradeLevel: String,
        section: String,
        birthDate: String,
        birthPlace:  String,
        age:  Number,
        contactNumber:  String,
        email:  String,
        role: String
      },
    
  }],
  grade: {
    type: String
  },
  student: {
     idNumber: String,
     firstName: String,
     middleName: String,
     lastName: String,
     gender: String,
     gradeLevel: String,
     section: String,
     birthDate: String,
     birthPlace:  String,
     age:  Number,
     contactNumber:  String,
     email:  String,
     role: String
  },
  gradeLevel: {
    type: String
  },
  section: {
    type: String
  }
}, {
    collection: 'grades1'
  })

module.exports = mongoose.model('Grades1', grade1Schema)