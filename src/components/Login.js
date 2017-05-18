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
import TravelLog from './TravelLog'

import db from '../db'
window.db = db

class Login extends Component {
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
  //  console.log('CreateAccount')
  //  this.state.redirect = false
  }

  handleOnClick = () => {
  //  this.setState({redirect: true})
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
    const password = this.state.password
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.then(user => this.props.history.push('/travellog')) // ) console.log('user  **') <Route path='/travellog' component={TravelLog} />
    .catch(e => console.log('error with signin'))
  //  console.log(user)
  }

  render () {
  //  if (this.state.redirect) {
    //  return <Redirect push to='/createaccount' />
  //  }
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create' onSubmit={this._submit}>
          <input type='text' placeholder='email address' value={this.state.email} onChange={this.handleChangeEmail} />
          <input type='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword} />
          <button>login</button>
          <p className='message'> Not registered? <Link to='/createaccount'>Create an account </Link> </p>
        </form>
      </div>
    </div>
  }
}

export default Login

{ /* <a onClick={this.handleOnClick} >Create an account</a>  */ }
