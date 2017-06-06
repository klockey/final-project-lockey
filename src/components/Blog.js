import React, { Component } from 'react'
import _ from 'lodash'
import store from '../store'
import { observer } from 'mobx-react'
import ReadOnlyMap from './ReadOnlyMap'
import db from '../db'
import { NavLink } from 'react-router-dom'

// import logo from '../images/logo.png'

@observer
class Blog extends Component {
  state = {
    entries: {}
  }

  componentWillMount () {
  //  console.log('user id' + store.user.uid)
//    var query = db.ref('users/' + store.user.uid + '/logs/').orderByKey()
    var query = db.ref('users/' + store.user.uid + '/logs/').orderByKey()
    query.once('value').then((snapshot) => {
      this.setState({
        entries: snapshot.val()
      })
    })
  }
  render () {
    return <div>
      <div className='container' >
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              {/* <img className='logo' src={logo} /> */}
              <div>
                <NavLink className='navbar-brand'to='/'>Log out</NavLink>
                <NavLink className='navbar-brand' to='/travellog'>Travel Log</NavLink>
              </div>
              {/* <a className='navbar-brand' href='#'>Logout</a> */}
              {/* <a className='navbar-brand' href='#'>Logout</a> */}
            </div>
            <div>Username: {store.user.email}</div>
          </div>
        </nav>
        {/* <ul>
          <li><NavLink to='/'>Log out</NavLink></li>
          <li><NavLink to='/travellog'>Travel Log</NavLink></li>
        </ul> */}
        {_.map(this.state.entries, (log, date) => {
          return <div key={date}>
            {console.log('lat 1 ' + log.location.lat)}
            {/* <!-- Project One --> */}
            <div className='row'>
              <div className='col-md-7'>
                <h2>{date}</h2>
                <h4>Entry</h4>
                <p>{log.entry}</p>
              </div>
              <div className='col-md-5'>

                {/* <h4>Entry</h4> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
            <hr />
            {/* <!-- Project Two --> */}
            <div className='row'>
              <div className='col-md-7'>
                <h4>Photos</h4>
                {/* {_.map(log.pictures, (url, id) => { */}
                {/* return <img src={url} key={id} /> */}
                {/* })} */}
                <img src={log.pictures} />
              </div>
              <div className='col-md-5'>

                {/* <h3>Project Two</h3> */}
                {/* <h4>Photos</h4> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
            <hr />
            {/* <!-- Project Three --> */}
            <div className='row'>
              <div className='col-md-7'>
                <h4>Map</h4>
                {/* <MapLog center={{lat: -25.363882, lng: 131.044922}}
                zoom={3}
              /> */}
                <ReadOnlyMap center={{lat: log.location.lat, lng: log.location.lng}} zoom={log.location.zoom} />
              </div>
              <div className='col-md-5'>
                {/* <h3>Project Three</h3> */}
                {/* <h4>Map</h4> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
              </div>
            </div>
            <hr />
          </div>
        })}
      </div>
    </div>
  }
}

export default Blog
