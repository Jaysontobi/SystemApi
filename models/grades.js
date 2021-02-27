const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gradeSchema = new Schema({
  status: {
    type: Boolean
  },
  gradeLevel: {
    type: String
  },
  section: {
    type: String
  },
  schoolYear: {
    type: String
  },
  subjects: [{
    schoolYear: {
      type: String
    },
    subjectName: String,
    subjectGrade: {
        firstQuarter: Number,
        secondQuarter: Number,
        thirdQuarter: Number,
        fourthQuarter: Number
    },
  }],
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
}, {
    collection: 'grades'
  })

module.exports = mongoose.model('Grades', gradeSchema)