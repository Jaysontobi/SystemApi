const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
  gradeLevel: {
   type: String
  },
  subjects: [{
   subjectName: String,
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
}, {
    collection: 'teacher'
  })

module.exports = mongoose.model('Teachers', teacherSchema)