import React from 'react'
import Card from './Card'

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className='container'>
        <div className='row top'>
          <div className='jumboTopImg col-xs-2'>
          </div>
          <div className='jumboTopTitle .col-xs-10'>
            <h4>Web Development Bootcamp Trial</h4>
            <button className='btn jumboTopBtn'>
              Continue your trial
              <span class="glyphicon glyphicon-chevron-right"></span>
            </button>
          </div>
        </div>
      </div>
      <hr/>
      <div className='row bottom'>
        <div className='bottomTitle'>
          <h4>Your Progress</h4> 
          <p>(1/4 complete)</p>
        </div>
        <div class="btn-group">
          <button class="btn btn-default selected glyphicon glyphicon-ok">Industry Knowledge 1</button>
          <button class="btn btn-default">Industry Knowledge 2</button>
          <button class="btn btn-default">HTML Basics</button>
          <button class="btn btn-default">Your First PHP Script</button>
        </div>
      </div>
      
    </div>
  )
}

export default Jumbotron