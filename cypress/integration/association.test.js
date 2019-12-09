const mongoose = require('mongoose')
const Club = require('../../server/models/Club')
const Team = require('../../server/models/Team')

describe('Associations', () => {
  let bvb, team
  beforeEach(done => {
    bvb = new Club({ name: 'BVB' })
    team = new Team({ teamName: 'BVB1' })

    bvb.teams.push(team)

    Promise.all([bvb.save(), team.save()]).then(() => done())
  })
  it.only('saves a relation between a club and a team', done => {
    Club.findOne({ name: 'BVB' })
      .populate('teams')
      .then(club => {
        console.log(club)
        done()
      })
  })
})
