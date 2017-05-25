import React, { Component } from 'react'
import * as firebase from 'firebase'
import _ from 'lodash'
class Blog extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     uid: '-fooooooo1'
  //   }
  // }

  state = {
    uid: '-fooooooo1',
    entries: {}
  }

  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
      authDomain: 'travellog-848b1.firebaseapp.com',
      databaseURL: 'https://travellog-848b1.firebaseio.com',
      storageBucket: 'travellog-848b1.appspot.com'
    }

    firebase.initializeApp(config)

    var query = firebase.database().ref('users/' + this.state.uid + '/logs/').orderByKey()
    query.once('value').then((snapshot) => {
      this.setState({
        entries: snapshot.val()
      })
    })
  }

  render () {
    console.log(this.state.entries)
    return <div className='Blog'>
      {_.map(this.state.entries, (log, date) => {
        return <div key={date}>
          <h2>{date}</h2>
          <p>{log.entry}</p>
          <div>
            {_.map(log.pictures, (url, id) => {
              return <img src={url} key={id} />
            })}
          </div>
          <div>
            MAP HERE FOR {JSON.stringify(log.location)}
          </div>
        </div>
      })}
    </div>
  }
}

export default Blog
