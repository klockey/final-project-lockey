import React, { Component } from 'react'
import * as firebase from 'firebase'
import _ from 'lodash'

class Blog extends Component {
  state = {
    uid: '-fooooooo1',
    entries: {}
  }

  componentWillMount () {
    var query = firebase.database().ref('users/' + this.state.uid + '/logs/').orderByKey()
    query.once('value').then((snapshot) => {
      this.setState({
        entries: snapshot.val()
      })
    })
  }
  render () {
    return <div>
      {_.map(this.state.entries, (log, date) => {
        return <div key={date}>
          {/* <!-- Project One --> */}
          <div className='row'>
            <div className='col-md-7'>
              <h2>{date}</h2>
              <p>{log.entry}</p>
            </div>
            <div className='col-md-5'>
              {/* <h3>Project One</h3> */}
              <h4>Entry</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
            </div>
          </div>
          {/* <!-- /.row --> */}
          <hr />
          {/* <!-- Project Two --> */}
          <div className='row'>
            <div className='col-md-7'>
              {_.map(log.pictures, (url, id) => {
                return <img src={url} key={id} />
              })}
            </div>
            <div className='col-md-5'>
              {/* <h3>Project Two</h3> */}
              <h4>Photos</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
            </div>
          </div>
          {/* <!-- /.row --> */}
          <hr />
          {/* <!-- Project Three --> */}
          <div className='row'>
            <div className='col-md-7'>
            MAP HERE FOR {JSON.stringify(log.location)}
            </div>
            <div className='col-md-5'>
              {/* <h3>Project Three</h3> */}
              <h4>Map</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
              <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
            </div>
          </div>
        </div>
      })}
    </div>
  }
}
export default Blog
