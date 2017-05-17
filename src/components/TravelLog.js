import React, { Component } from 'react'
import '../styles/bootstrap.min.css'
import '../styles/justified-nav.css'
import '../styles/index.css'

class TravelLog extends Component {
  render () {
    return <div className='container'>
      <nav className='navbar navbar-light bg-faded'>
        <h1 className='navbar-brand mb-0'>User: Keith</h1>
      </nav>
      <div className='jumbotron'>
        {/* <div className='jumbotron'> */}
        <h1>Travel Log</h1> <br />
        {/* <textarea className='log' /> */}
      </div>
      <div className='row'>
        <div className='col-lg-4'>
          <textarea className='log' />
        </div>
      </div>
      <div class="row top-buffer"> 
      <div className='row'>
        <div className='col-lg-4'>
          <h2>Companions</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <img src='../images/ingrid.jpg' />
          <p align='center'>Ingrid</p>
        </div>
        <div className='col'>
          <img src='../images/michelle.jpg' />
          <p align='center'>Michelle</p>
        </div>
        <div className='col'>
          <img src='../images/sara.jpg' />
          <p align='center'>Sara</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4'>
          <h2>Map</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <img src='../images/map.png' />
        </div>
      </div>

      <footer className='footer'>
        <p>&copy; Keith Lockey 2017</p>
      </footer>
    </div>
  }
}

export default TravelLog
