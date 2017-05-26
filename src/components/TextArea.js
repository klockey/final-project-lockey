import React, { Component } from 'react'
import * as firebase from 'firebase'
import Loading from './Loading'
import db from '../db'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class TextArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entry: '',
      loaded: false,
      user: {},
    //  uid: 'CG9CqmcNdIZvA54msCoNBDX91TK2',
  //    uid: '-fooooooo1',
      date: '2017-05-25'
  //    childData: '',
  //    entries: [],
  //    entries2: ''
    }
  }

  componentWillMount () {
    const promise = firebase.auth().signInWithEmailAndPassword('hello@hello.com', 'aaaaaa')
    promise.then(user => {
      this.setState({user: user})
      this.dbRefObject = db.ref(`/users/${user.uid}/logs/${this.state.date}`)
      this.dbRefObject.on('value', snapshot => {
        let log = snapshot.val()
        this.setState({ loaded: true, entry: log.entry })
      })
    }).catch(e => console.log(e))
  }

  componentDidUpdate () {
    if (this.dbRefObject) {
      this.dbRefObject.set({ entry: this.state.entry })
    }
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
