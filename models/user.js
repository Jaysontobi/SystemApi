const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  idNumber: {
    type: String
  },
  schoolYear: {
    type: String
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  gradeLevel: {
    type: String
  },
  section: {
    type: String
  },
  birthDate: {
    type: String
  },
  birthPlace: {
    type: String
  },
  age: {
    type: Number
  },
  contactNumber: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  parent: {
    _id: String,
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
  password: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)