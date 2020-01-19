const mongoose = require('mongoose')
const Club = require('./models/Club')
const Team = require('./models/Team')
const Player = require('./models/Player')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`))

app.get('/clubs/', (req, res) => {
  Club.find()
    .populate('teams')
    .then(clubs => res.json(clubs))
    .catch(err => res.json(err))
})
app.get('/player/', (req, res) => {
  Player.find()
    .then(player => res.json(player))
    .catch(err => res.json(err))
})
app.get('/club/:slug', (req, res) => {
  Club.find()
    .populate('teams')
    .then(club => res.json(club))
    .catch(err => res.json(err))
})

app.post('/clubs', (req, res) => {
  const { teams, ...club } = req.body
  const teamPromises = teams.map(team => Team.create(team))
  Promise.all(teamPromises).then(teamEntries => {
    const teamIds = teamEntries.map(entry => entry._id)
    Club.create({ ...club, teams: teamIds })
      .then(club => res.json(club))
      .catch(err => res.json(err))
  })
})

app.post('/player', (req, res) => {
  Player.create(req.body)
    .then(newPlayer => res.json(newPlayer))
    .catch(err => res.json(err))
})
