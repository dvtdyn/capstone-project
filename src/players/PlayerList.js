import React from 'react'
import player from '../player.json'
import Player from './Player.js'
import Main from '../common/Main.js'
// import FuzzySearch from '../Common/FuzzySearch.js'

export default function PlayerList(searchInput) {
  /* const result = FuzzySearch(searchInput, player, ['name', 'slug']) */
  return (
    <Main>
      {player
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          ({ profileImg, name, websiteURL, _id, phoneNumber, mail, slug }) => (
            <Player
              key={_id}
              logo={profileImg}
              name={name}
              websiteURL={websiteURL}
              phoneNumber={phoneNumber}
              mail={mail}
              slug={slug}
            />
          )
        )}
    </Main>
  )
}
