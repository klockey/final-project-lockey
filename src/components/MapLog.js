import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class MapLog extends Component {
  componentWillMount () {
    console.log(store.user.uid)
  }

  render () {
    return <div>
      <GoogleMapLog
      //  center={{lat: -25.363882, lng: 131.044922}}
      //  zoom={3}
        center={{lat: this.props.center.lat, lng: this.props.center.lng}}
        zoom={this.props.zoom}
        containerElement={<div />}
        mapElement={<div style={{height: 50 + '%', width: 70 + '%'}} />} />
    </div>
  }
}

export default MapLog
