import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'

export default function Map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 53.561566, lng: 9.916121 }}
    >
      <Marker position={{ lat: 53.561566, lng: 9.916121 }} />
    </GoogleMap>
  )
}
