const mongoose = require('mongoose')

const addressSchema = {
  zip: String,
  street: String,
  houseNumber: String,
  city: String,
}

module.exports = mongoose.model('Address', addressSchema)
