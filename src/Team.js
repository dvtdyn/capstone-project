import React from 'react'

export default function Team({ teamName, league }) {
  return (
    <>
      <h3>{teamName}</h3>
      <p>{league}</p>
    </>
  )
}
