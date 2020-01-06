import React from 'react'

export default function MapsStatic({ address }) {
  const MAPSKEY = process.env.REACT_APP_MAPS_KEY
  const size = '80x80'
  const zoom = 10

  const imgSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=${zoom}&size=${size}
  &markers=size:tiny%7Ccolor:red%7C${address}&key=${MAPSKEY}`

  return <img src={imgSrc} alt="" />
}
