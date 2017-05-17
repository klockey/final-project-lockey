import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Login from './Login'
import CreateAccount from './CreateAccount'
import TravelLog from './TravelLog'

class App extends Component {
  render () {
    return <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/createaccount' component={CreateAccount} />
          <Route path='/travellog' component={TravelLog} />
        </Switch>
      </Router>
    </div>
  }
}

export default App
