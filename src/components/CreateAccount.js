import React, { Component } from 'react'
import styles from '../styles/login.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

import * as firebase from 'firebase'

import db from '../db'
window.db = db

class CreateAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      email: '',
      password: ''
    }
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this._submit = this._submit.bind(this)
  }

  componentDidMount () {
    console.log('CreateAccount')
  }

  handleChangePassword (event) {
    this.setState({password: event.target.value})
  }

  handleChangeEmail (event) {
    this.setState({email: event.target.value})
  }

  _submit (event) {
    event.preventDefault()
    console.log('submit')
    console.log(this.state.email)
    const auth = firebase.auth()
    const email = this.state.email
    // check for real email
    const password = this.state.password
    const promise = auth.createUserWithEmailAndPassword(email, password)
    promise.then(user => console.log('user'))
      .catch(e => console.log('error with signin'))
  }

  render () {
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create' onSubmit={this._submit}>
          <input type='text' placeholder='email address' value={this.state.email} onChange={this.handleChangeEmail} />
          <input type='password' placeholder='password' ref='password' value={this.state.password} onChange={this.handleChangePassword} />
          <button>create</button>
          <p className='message'> Already registered? <Link to='/'>Sign In</Link></p>
        </form>
      </div>
    </div>
  }
}

export default CreateAccount

{ /* <div className='login-page'>
 <div className='form'>
   <form className='register-form'>
     <input type='text' placeholder='name' />
     <input type='password' placeholder='password' />
     <input type='text' placeholder='email address' />
     <button>create</button>
     <p className='message'> Already registered? <a href='#' onClick=''> Sign In </a></p>
   </form>
 </div>
</div> */ }
