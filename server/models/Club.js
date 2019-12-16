const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clubSchema = new Schema(
  {
    name: String,
    image: String,
    slug: String,
    websiteURL: String,
    websiteName: String,
    phoneNumber: String,
    mail: String,
    logo: String,
    teams: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Team',
      },
    ],
    address: {
      zip: String,
      street: String,
      houseNumber: String,
      city: String,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Club', clubSchema)
