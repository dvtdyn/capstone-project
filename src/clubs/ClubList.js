import React from 'react'
import Club from './Club.js'
import Main from '../common/Main.js'
import FuzzySearch from '../common/FuzzySearch.js'

export default function ClubList({ searchInput, clubs }) {
  const result = FuzzySearch(searchInput, clubs, [
    'name',
    'teams.teamName',
    'teams.league',
  ])
  return (
    <Main>
      {result
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ logo, name, websiteURL, _id, phoneNumber, mail, slug }) => (
          <Club
            key={_id}
            logo={logo}
            name={name}
            websiteURL={websiteURL}
            phoneNumber={phoneNumber}
            mail={mail}
            slug={slug}
          />
        ))}
    </Main>
  )
}
