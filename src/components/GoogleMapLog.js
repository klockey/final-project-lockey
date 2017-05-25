import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import * as firebase from 'firebase'

class GoogleMapLog extends Component {
  constructor () {
    super()
    this.state = {
      map: null,
      zoom: null,
      uid: '-fooooooo1',
      date: '2017-05-10'
    }
  }

  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
      authDomain: 'travellog-848b1.firebaseapp.com',
      databaseURL: 'https://travellog-848b1.firebaseio.com',
      storageBucket: 'travellog-848b1.appspot.com'
    }

    firebase.initializeApp(config)
  }

  mapMoved () {
    const lat = this.state.map.getCenter().lat()
    const lng = this.state.map.getCenter().lng()
    const zoom = this.state.map.getZoom()
    firebase.database().ref('/users/' + this.state.uid + '/logs/' + this.state.date + '/location').update({ lat, lng, zoom })
  }

  mapLoaded (map) {
    if (this.state.map != null) { return }
    this.setState({
      map: map
    })
  }

  zoomChanged () {
    console.log('zoom has changed ' + this.state.map.getZoom())
    firebase.database().ref('/users/' + this.state.uid + '/logs/' + this.state.date + '/location/zoom').set(this.state.map.getZoom())
  }

  render () {
    const markers = this.props.markers || []
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(GoogleMapLog)
