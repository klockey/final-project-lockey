import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import User from './User'
import * as firebase from 'firebase'
import '../styles/bootstrap.min.css'
import '../styles/justified-nav.css'
import '../styles/index.css'

class TravelLog extends Component {
  render () {
    return <div className='container enjoy-css'>
      <User />
      {/* <nav className='navbar navbar-light bg-faded'>
        <span><h1 className='navbar-brand mb-0'>User: Keith</h1> </span>
        <span><h1 className='navbar-brand mb-0'>Date: 1/1/2017</h1> </span>
        <User />
      </nav> */}
      <div className='jumbotron'>
        {/* <div className='jumbotron'> */}
        <h1>Travel Log</h1> <br />
        {/* <textarea className='log' /> */}
      </div>
      <form>
        <div className='row'>
          <div className='col-lg-4'>
            <textarea className='log form-control' />
          </div>
        </div>
        <div className='row top-buffer' />

        <div className='row companions'>
          {/* <div className='container-fluid'> */}
          <div className='col-lg-4'>
            <h2>Companions</h2>
          </div>
        </div>
        <div className='row companions'>
          <div className='col'>
            <img src='../images/ingrid.jpg' />
            <p>Ingrid</p>
          </div>
          <div className='col'>
            <img src='../images/michelle.jpg' />
            <p>Michelle</p>
          </div>
          <div className='col'>
            <img src='../images/sara.jpg' />
            <p>Sara</p>
          </div>
        </div>
        <div className='row fileuploader'>
          <div className='col'>
            <input type='file' />
          </div>
        </div>
        <div className='row top-buffer' />

        <div className='row maps'>
          <div className='col-lg-4'>
            <h2>Map</h2>
          </div>
        </div>
        <div className='row maps'>
          <div className='col'>
            <GoogleMapLog
              center={{lat: -25.363882, lng: 131.044922}}
              zoom={15}
              containerElement={<div style={{height: 100 + '%'}} />}
              mapElement={<div style={{height: 100 + '%'}} />} />
            {/* <img className='googlemap' src='../images/map.png' /> */}
          </div>
        </div>
      </form>
      <footer className='footer'>
        <p>&copy; Keith Lockey 2017</p>
      </footer>
    </div>
  }
}

export default TravelLog
