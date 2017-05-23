import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../styles/bootstrap.min.css'
import '../styles/index.css'
import '../styles/justified-nav.css'
import FileInput from 'react-file-input'
import Loading from './Loading'

class Photo extends Component {
  state = {
    url: '',
    counter: 0,
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
  }

  handleChange = (event) => {
    let file = event.target.files[0]
  //  console.log(file.name)
    console.log(this.state.counter)
    let storageRef = firebase.storage().ref('sweetgifs/' + file.name)
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        this.setState({
          url: url,
          loaded: true
        })
      })
    })
  }

  componentDidUpdate () {
    firebase.database().ref('/users/-fooooooo1/logs/2017-05-10/pictures/' + new Date().getUTCMilliseconds() + new Date().getUTCMilliseconds()).set(this.state.url)
    console.log('url' + this.state.url)
  }

  render () {
  //  if (!this.state.loaded) return <Loading />
    return <div className='Photo'>
      <div className='row fileuploader'>
        <div className='col'>
          <div className='row top-buffer' />
          <img className='' src={this.state.url} />
          <form onSubmit=''>
            <FileInput name='myImage'
              accept='.png,.gif'
              placeholder='My Image'
              className='inputClass'
              onChange={this.handleChange} />
          </form>
        </div>
      </div>
    </div>
  }
}

export default Photo
