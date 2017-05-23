import React, { Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class GoogleMapLog extends Component {
  mapMoved () {
    console.log('mapMoved: ')
  }

  render () {
    const markers = this.props.markers || []

    return (
      <GoogleMap
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
