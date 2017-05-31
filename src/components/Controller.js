import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'

@observer
class Controller extends Component {
  constructor (props) {
    super(props)
  }

  // _logOut = (event) => {
  //   event.preventDefault()
  //   store.user = null
  //   this.props.history.push('/')
  // }
  //
  // _posts = (event) => {
  //   event.preventDefault()
  //   this.props.history.push('/blog')
  // }

  render () {
    return <div className='Controller'>
      <ul>
        <li><NavLink to='/'>Log out</NavLink></li>
        <li><NavLink to='/blog'>Posts</NavLink></li>
      </ul>
    </div>
  }
}

export default Controller
