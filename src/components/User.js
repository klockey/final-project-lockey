import React, { Component } from 'react'
import * as firebase from 'firebase'

class User extends Component {
  state = {
  //  user: null
    datetime: ''
  }

  componentWillMount () {
    let date = new Date()
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    let am_pm = date.getHours() >= 12 ? 'PM' : 'AM'
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    let time = hours + ':' + minutes + am_pm // + ':' + seconds

    let currentdate = new Date()
    this.state.datetime = 'Log Date: ' + currentdate.getMonth() + '/' +
                currentdate.getDate() + '/' +
                currentdate.getFullYear() + ' @ ' +
                time

    console.log(this.state.datetime)

    let user = firebase.auth().currentUser
    let name, email, photoUrl, uid, emailVerified

    if (user != null) {
      name = user.displayName
      email = user.email
      photoUrl = user.photoURL
      emailVerified = user.emailVerified
      uid = user.uid
      console.log(uid)
      console.log(email)
    }
  }

  render () {
    return <div className=''> <nav className='navbar navbar-light bg-faded'>
      <span><h1 className='navbar-brand mb-0'>User: Keith</h1></span>
      <span><h1 className='navbar-brand mb-0'>{this.state.datetime}</h1></span>
    </nav>
    </div>
  }
}

export default User
