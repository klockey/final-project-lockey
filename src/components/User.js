import React, { Component } from 'react'
import * as firebase from 'firebase'

class User extends Component {
  state = {
  //  user: null
  }

  componentDidMount () {
    let date = new Date()
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    let am_pm = date.getHours() >= 12 ? 'PM' : 'AM'
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    let time = hours + ':' + minutes // + ':' + seconds

    let currentdate = new Date()
    let datetime = 'Log Date: ' + currentdate.getMonth() + '/' +
                currentdate.getDate() + '/' +
                currentdate.getFullYear() + ' @ ' +
                time

    console.log(datetime)

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
    return <div className='' />
  }
}

export default User
