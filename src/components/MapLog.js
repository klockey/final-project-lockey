import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import * as firebase from 'firebase'
import Loading from './Loading'

class MapLog extends Component {
  componentWillMount () {
  }

  render () {
    return <div className='MapLog'>
      <div className='row maps'>
        <div className='col'>
          <GoogleMapLog
            center={{lat: -25.363882, lng: 131.044922}}
            zoom={3}
            containerElement={<div style={{height: 100 + '%'}} />}
            mapElement={<div style={{height: 30 + '%', width: 70 + '%'}} />} />
        </div>
      </div>
    </div>
  }
}

export default MapLog
