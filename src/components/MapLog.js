import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import * as firebase from 'firebase'
import Loading from './Loading'
import '../styles/bootstrap.min.css'
import '../styles/index.css'
import '../styles/justified-nav.css'

class MapLog extends Component {
  componentWillMount () {
    // const config = {
    //   apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
    //   authDomain: 'travellog-848b1.firebaseapp.com',
    //   databaseURL: 'https://travellog-848b1.firebaseio.com',
    //   storageBucket: 'travellog-848b1.appspot.com'
    // }
    // firebase.initializeApp(config)
  }

  render () {
    return <div className='MapLog'>
      <div className='row maps'>
        <div className='col'>
          <GoogleMapLog
            center={{lat: -25.363882, lng: 131.044922}}
            zoom={3}
            containerElement={<div style={{height: 100 + '%'}} />}
            mapElement={<div style={{height: 50 + '%', width: 50 + '%'}} />} />
        </div>
      </div>
    </div>
  }
}

export default MapLog
