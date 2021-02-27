const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quarterSchema = new Schema({
    quarter: {
        type: String
    }
}, {
    collection: 'quarter'
  })

module.exports = mongoose.model('Quarter', quarterSchema)