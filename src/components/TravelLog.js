import React, { Component } from 'react'
import TextArea from './TextArea'
import Photo from './Photo'
import MapLog from './MapLog'

class TravelLog extends Component {
  render () {
    return <div>
      {/* Page Content */}

      <div className='container'>
        {/* <!-- Page Heading --> */}
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='page-header'>
              Page Heading
              <small>Secondary Text</small>
            </h1>
          </div>
        </div>
        {/* <!-- /.row --> */}

        {/* <!-- Project One --> */}
        <div className='row'>
          <div className='col-md-7'>
            <a href='#'>
              <TextArea />
              {/* <img className='img-responsive' src='http://placehold.it/700x300' alt='' /> */}
            </a>
          </div>
          <div className='col-md-5'>
            <h3> DATE HERE </h3>
            <h4>Day Description</h4>
            <p>Please summarize your day.</p>
            {/* <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
          </div>
        </div>
        {/* <!-- /.row --> */}

        <hr />

        {/* <!-- Project Two --> */}
        <div className='row'>
          <div className='col-md-7'>
            <a href='#' />
            <Photo />
            {/* <img className='img-responsive' src='http://placehold.it/700x300' alt='' /> */}
          </div>
          <div className='col-md-5'>
            <h3> DATE HERE </h3>
            <h4>Day Description</h4>
            <p>Please summarize your day.</p>
            {/* <a className='btn btn-primary' href='#'>View Project <span className='glyphicon glyphicon-chevron-right' /></a> */}
          </div>
        </div>
        {/* <!-- /.row --> */}

        <hr />

        {/* <!-- Project Three --> */}
        <div className='row'>
          <div className='col-md-7'>
            <a href='#' />
            <MapLog />
            {/* <img className='img-responsive' src='http://placehold.it/700x300' alt='' /> */}
          </div>
          <div className='col-md-5'>
            <h3> DATE HERE </h3>
            <h4>Day Description</h4>
            <p>Please summarize your day.</p>
          </div>
        </div>
        {/* <!-- /.row --> */}
        <hr />
        {/* <!-- Pagination --> */}
        <div className='row text-center'>
          <div className='col-lg-12'>
            <ul className='pagination'>
              <li>
                <a href='#'>&laquo;</a>
              </li>
              <li className='active'>
                <a href='#'>1</a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li>
                <a href='#'>4</a>
              </li>
              <li>
                <a href='#'>5</a>
              </li>
              <li>
                <a href='#'>&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.row --> */}

        <hr />

        {/* <!-- Footer --> */}
        <footer>
          <div className='row'>
            <div className='col-lg-12'>
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </footer>
      </div>
    </div>
  }
}

export default TravelLog
