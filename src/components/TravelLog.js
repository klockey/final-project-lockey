import React, { Component } from 'react'
import TextArea from './TextArea'
import Photo from './Photo'
import MapLog from './MapLog'
import store from '../store'
import { observer } from 'mobx-react'
// import logo from '../images/logo.png'
import db from '../db'
import Loading from './Loading'
import {
  Link,
  NavLink
} from 'react-router-dom'

@observer
class TravelLog extends Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 0,
    loaded: false
  }

  componentDidMount () {
    this.updateLocation()
  }

  componentWillReact () {
    this.updateLocation()
  }

  updateLocation () {
    this.dbRefObject = db.ref(`/users/${store.user.uid}/logs/${store.date}/location`)
    this.dbRefObject.once('value', snapshot => {
      let log = snapshot.val()
      console.log({log})
    //  if (log !== null) {
      this.setState({
        lat: log.lat,
        lng: log.lng,
        zoom: log.zoom,
        loaded: true
      })
    //  }
    })
    // }
  }

  render () {
  //  if (!this.state.loaded) return <Loading />
    return <div>
      <div className='container travellog'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <div>
                {/* <div><img className='logo' src={logo} /> </div> */}
                <div>
                  <NavLink className='navbar-brand'to='/'>Log out</NavLink>
                  <NavLink className='navbar-brand' to='/blog'>Posts</NavLink>
                </div>
                <div>Username: {store.user.email}</div>
              </div>
              {/* <a className='navbar-brand' href='#'>Logout</a> */}
              {/* <a className='navbar-brand' href='#'>Logout</a> */}
            </div>
          </div>
        </nav>

        {/* <!-- Page Heading --> */}
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='page-header'>
              {/* <p>  Daily Log </p> */}
              <p> <small> { store.date } </small> </p>
            </h1>
          </div>
        </div>
        {/* <!-- Text Area app --> */}
        <div className='row'>
          <div className='col-md-7 logBackground'>
            <TextArea />
          </div>
          <div className='col-md-5'>
            <h3> New Notes </h3>
            <h4> A Day's Description!</h4>
            <p>Please summarize <em>your </em> day.</p>
          </div>
        </div>

        <hr />

        {/* <!-- Photo App --> */}
        <div className='row'>
          <div className='col-md-7' >
            <Photo />
          </div>
          <div className='col-md-5'>
            {/* <h3> Favorite Photo! </h3> */}
            <h4>Photo that Describes the day!</h4>
            <p>Have fun with it!</p>
          </div>
        </div>

        <hr />

        {/* <!-- Map Three --> */}
        <div className='row'>
          <div className='col-md-7'>
            <MapLog center={{lat: this.state.lat, lng: this.state.lng}}
              zoom={this.state.zoom}
            />
            {/* <MapLog /> */}
          </div>
          <hr />
          <div className='col-md-5'>
            <h3> Place on the map! </h3>
            <h4>Where did you go?</h4>
            <p>Where you went today!!</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  }
}

export default TravelLog
