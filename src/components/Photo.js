import React, { Component } from 'react'
import * as firebase from 'firebase'
// import '../styles/bootstrap.min.css'
import '../styles/index.css'
// import '../styles/justified-nav.css'
import FileInput from 'react-file-input'
import Loading from './Loading'
import _ from 'lodash'

class Photo extends Component {
  state = {
    url: '',
    counter: 0,
    loaded: false,
    uid: '-fooooooo1',
    entries: {},
    date: '2017-05-10'
  }

  componentWillMount () {
  }

  handleChange = (event) => {
    let file = event.target.files[0]
    console.log(this.state.counter)
    let storageRef = firebase.storage().ref('sweetgifs/' + file.name)
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        this.setState({
          url: url
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
    return <div>
      <img className='' src={this.state.url} />
      <form onSubmit=''>
        <FileInput name='myImage'
          accept='.png,.gif'
          placeholder='My Image'
          className='inputClass'
          onChange={this.handleChange} />
      </form>
    </div>
  }
}

export default Photo
