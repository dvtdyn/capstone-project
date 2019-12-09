const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema(
  {
    teamName: String,
    league: String,
  },
  { versionKey: false }
)

module.exports = mongoose.model('Team', teamSchema)
