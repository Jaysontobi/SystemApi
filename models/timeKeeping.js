const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gradeSchema = new Schema({
  timeIn : Date,
  timeOut: Date,
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
    collection: 'timekeeping'
  })

module.exports = mongoose.model('Timekeeping', gradeSchema)