const mongoose = require('mongoose')
/* const Team = require('./Team')
const Address = require('./Address') */
const clubSchema = {
  name: String,
  slug: String,
  websiteURL: String,
  websiteName: String,
  phoneNumber: String,
  mail: String,
  logo: String,
  teams: [
    /* {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team', // mongoose ref + populate
    }, */
  ],
  address: {},
}

module.exports = mongoose.model('Club', clubSchema)
