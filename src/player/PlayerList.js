import React from 'react'
import Player from './Player.js'
import Main from '../common/Main.js'
import FuzzySearch from '../common/FuzzySearch.js'

export default function PlayerList({ searchInput, player }) {
  const result = FuzzySearch(searchInput, player, ['name'])
  return (
    <Main>
      {result
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          ({
            profileImage,
            name,
            facebook,
            instagram,
            _id,
            phoneNumber,
            mail,
            slug,
          }) => (
            <Player
              key={_id}
              profileImage={profileImage}
              name={name}
              facebook={facebook}
              instagram={instagram}
              phoneNumber={phoneNumber}
              mail={mail}
            />
          )
        )}
    </Main>
  )
}
