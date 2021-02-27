const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let advisorySchema = new Schema({
  gradeLevel: {
   type: String
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
  }
}, {
    collection: 'advisory'
  })

module.exports = mongoose.model('Advisory', advisorySchema)