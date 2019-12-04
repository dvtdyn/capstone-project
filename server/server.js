const mongoose = require('mongoose')
const Club = require('./models/Club')
const express = require('express')
mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))
app.get('/clubs', (req, res) => {
  Club.find()
    .then(clubs => res.json(clubs))
    .catch(err => res.json(err))
})
