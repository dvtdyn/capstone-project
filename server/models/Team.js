const mongoose = require('mongoose')

const teamSchema = {
  name: String,
  league: String,
}

module.exports = mongoose.model('Team', teamSchema)
