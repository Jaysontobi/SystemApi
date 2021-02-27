const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  itemNumber: {
    type: Number
  },
  itemDescription: {
    type: String
  },
  datePurchased: {
    type: Date
  },
  itemLocation: {
    type: String
  },
  numberOfItems: {
    type: String
  },
  itemStatus: {
    type: String
  },
  employeeAssignedTo: {
    type: String
  }
}, {
    collection: 'items'
  })

module.exports = mongoose.model('Item', itemSchema)