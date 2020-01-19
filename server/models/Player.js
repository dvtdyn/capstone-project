const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema(
  {
    name: String,
    profileImage: String,
    slug: String,
    phoneNumber: String,
    mail: String,
    instagram: String,
    facebook: String,
  },
  { versionKey: false }
)

module.exports = mongoose.model('Player', playerSchema)
