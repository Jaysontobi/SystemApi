const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let auditTrailSchema = new Schema({
  user: {
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
  },
  activity : {
      type : String
  },
  date: {
      type: Date
  }

}, {
    collection: 'auditTrail'
  })

module.exports = mongoose.model('AuditTrail', auditTrailSchema)