import React, { Component } from 'react'
import styles from '../styles/login.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

class CreateAccount extends Component {
  componentDidMount () {
    console.log('CreateAccount')
  }

  render () {
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <input type='text' placeholder='email address' />
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
