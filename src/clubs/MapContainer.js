import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'
import FuzzySearch from '../common/FuzzySearch'

export default function MapContainer({ searchInput, clubs }) {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  const MAPSKEY = process.env.REACT_APP_MAPS_KEY
  const result = FuzzySearch(searchInput, clubs, [
    'name',
    'teams.teamName',
    'teams.league',
  ])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        clubs={result}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPSKEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      ></WrappedMap>
    </div>
  )
}
