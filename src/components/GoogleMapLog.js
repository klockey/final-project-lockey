import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class GoogleMapLog extends Component {
  // constructor () {
  //   super()
  //   this.state.map = {
  //     map: null
  //   }
  // }

  mapMoved () {
    // console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    console.log('mapMoved: ')
  }

  // mapLoaded (map) {
  //   if (this.state.map !== map) { return }
  //   this.setState({
  //     map: map
  //   })
  // //  console.log('map loaded' + map.getCenter)
  // }

  render () {
    const markers = this.props.markers || []

    return (
      <GoogleMap
        // ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
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
