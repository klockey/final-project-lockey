import React, { Component } from 'react'
import styles from '../styles/login.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

class Login extends Component {
  state = {
    redirect: false
  }

  componentDidMount () {
    console.log('CreateAccount')
    this.state.redirect = false
  }

  handleOnClick = () => {
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return <Redirect push to='/createaccount' />
    }
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button>login</button>
          <p className='message'> Not registered? <Link to='/createaccount'>Create an account </Link> </p>
        </form>
      </div>
    </div>
  }
}

export default Login

{ /* <a onClick={this.handleOnClick} >Create an account</a>  */ }
