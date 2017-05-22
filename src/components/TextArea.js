import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../styles/bootstrap.min.css'
import '../styles/index.css'
import '../styles/justified-nav.css'
import Loading from './Loading'

class TextArea extends Component {
  state = {
    uid: '',
    entry: '',
    loaded: false
  }

  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
      authDomain: 'travellog-848b1.firebaseapp.com',
      databaseURL: 'https://travellog-848b1.firebaseio.com',
      storageBucket: 'travellog-848b1.appspot.com'
    }

    firebase.initializeApp(config)

    const dbRefObject = firebase.database().ref().child('users')

    dbRefObject.on('value', snapshot => {
      let entry = snapshot.child('-fooooooo1').child('logs').child('2017-05-10').child('entry').val()
      this.setState({ loaded: true, entry: entry })
    })
  }

  componentDidUpdate () {
    firebase.database().ref('/users/-fooooooo1/logs/2017-05-10/entry').set(this.state.entry)
  }

  _change = (event) => {
    this.setState({
      entry: event.target.value
    })
  }

  render () {
    if (!this.state.loaded) return <Loading />
    return <div className='row companions'>
      <div className='col-lg-4'>
        <textarea className='log form-controlform form-rounded dimensions' value={this.state.entry} onChange={this._change} />
      </div>
    </div>
  }
}

export default TextArea
