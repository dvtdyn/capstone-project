import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'

export default function MapContainer({ clubs }) {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  const MAPSKEY = process.env.REACT_APP_MAPS_KEY

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        clubs={clubs}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPSKEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      ></WrappedMap>
    </div>
  )
}
