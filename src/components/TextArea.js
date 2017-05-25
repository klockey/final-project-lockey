import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../styles/bootstrap.min.css'
import '../styles/index.css'
import '../styles/justified-nav.css'
import Loading from './Loading'

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
    const config = {
      apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
      authDomain: 'travellog-848b1.firebaseapp.com',
      databaseURL: 'https://travellog-848b1.firebaseio.com',
      storageBucket: 'travellog-848b1.appspot.com'
    }

    firebase.initializeApp(config)

    const promise = firebase.auth().signInWithEmailAndPassword('hello@hello.com', 'aaaaaa')

    promise.then(user => {
      this.setState({user: user})
      this.dbRefObject = firebase.database().ref(`/users/${user.uid}/logs/${this.state.date}`)
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

//      firebase.auth().onAuthStateChanged((user) => {
//  })
    // console.log('entries 2' + entries)
    //  let getit = entries.map((a) => {
    //    return a
    //  })

  //  console.log(getit)

  //  console.log('query: ' + query)

    // let user = firebase.auth().currentUser

  //  firebase.auth().signInAnonymously().catch((error) => {
    //  var errorCode = error.code
    //  var errorMessage = error.message
  //  })

    //  console.log(user)
    //  this.setState({user: user})
//    })

  //  console.log('user' + this.state.user)

    // let name, email, photoUrl, uid, emailVerified

    // if (this.state.user != null) {
    //   name = user.displayName
    //   this.state.firebaseEmail = user.email
    //   photoUrl = user.photoURL
    //   emailVerified = user.emailVerified
    //   uid = user.uid
    //   console.log(uid)
    //   console.log(email)
    // }

    // console.log('uid ' + this.state.user.uid)
