import React, { Component } from 'react'
import GoogleMapLog from './GoogleMapLog'
import User from './User'
import * as firebase from 'firebase'
import nodejs from 'node.js'
import Loading from './Loading'
import TextArea from './TextArea'
import '../styles/bootstrap.min.css'
import '../styles/index.css'
import '../styles/justified-nav.css'
// import '../styles/bootstrap.css'

class TravelLog extends Component {
  state = {
    uid: '',
    entry: '',
    loaded: false
  }

  componentWillMount () {
    // const config = {
    //   apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
    //   authDomain: 'travellog-848b1.firebaseapp.com',
    //   databaseURL: 'https://travellog-848b1.firebaseio.com',
    //   storageBucket: 'travellog-848b1.appspot.com'
  }

    // firebase.initializeApp(config)
    //
    // const dbRefObject = firebase.database().ref().child('users')
    //
    // dbRefObject.on('value', snapshot => {
    //   this.state.entry = JSON.stringify(snapshot.child('-fooooooo1').child('logs').child('2017-05-10').child('entry').val())
    //   this.state.entry = this.state.entry.replace(/\"/g, '')
    //   this.setState({loaded: true})
    // })

// ***********************************************************

    // dbRefObject.child('users').child('-fooooooo1').child('logs').child('2017-05-10').set({
    //   entry: '**mmm****'
    // })

// **********************************************************
    // var postData = {
    //   entry: '*****'
    // }

  // Get a key for a new Post.
  //  var newPostKey = firebase.database().ref().child('users').push().key

//  Write the new post's data simultaneously in the posts list and the user's post list.
  //  var updates = {}
  //  updates['/users/-fooooooo1/logs/2017-05-10/entry' + newPostKey] = postData

//* ********************/
    // let ent = 'ppp'
    //
    // let updates = {}
    // updates['/users/-fooooooo1/logs/2017-05-10/entry/'] = ent
    // firebase.database().ref().update(updates)

  render () {
    return <div className='container enjoy-css'>
      <User />
      <div className='row top-buffer' />
      <div className='row top-buffer' />
      <div className='row top-buffer' />
      <div className='jumbotron header-travellog'>
        {/* <div className='jumbotron'> */}
        <h1>Travel Log</h1> <br />
        {/* <textarea className='log' /> */}
      </div>
      <form>
        <div className='row top-buffer' />
        <div className='row top-buffer' />

        {/* <TextArea /> */}

        <div className='row'>
          <div className='col-md-4  text-center'>
            <h2 className=''> Companions </h2>
          </div>
        </div>

        <div className='row top-buffer' />

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

        <div className='row top-buffer' />

        <div className='row fileuploader '>
          <div className='col'>
            <input type='file' />
          </div>
        </div>
        <div className='row top-buffer' />
        <div className='row top-buffer' />

        <div className='row maps'>
          <div className='col-lg-4'>
            <h2>Map</h2>
          </div>
        </div>
        <div className='row top-buffer' />
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
