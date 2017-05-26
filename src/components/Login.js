import React, { Component } from 'react'
 // import styles from '../styles/login.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import * as firebase from 'firebase'
import TravelLog from './TravelLog'
import { observer } from 'mobx-react'
import store from '../store'

import db from '../db'
window.db = db

@observer class Login extends Component {
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

  componentWillMount () {
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
    console.log('store user ' + store.user)
    const auth = firebase.auth()
    const email = this.state.email
    const password = this.state.password
    const promise = auth.signInWithEmailAndPassword(email, password)
    store.promise = promise
    promise.then(user => {
      store.user = user
      this.props.history.push('/travellog')
    }
    ).catch(e => console.log('error with signin'))
  }

  render () {
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
