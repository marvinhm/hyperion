import React from 'react'

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className='row'>
        <ul class="media-list">
          <li class="media">
            <a class="pull-left" href="#">
              <img class="media-object" src="..." alt="..."/>
            </a>
            <div class="media-body">
              <h4 class="media-heading">Media heading</h4>
              ...
            </div>
          </li>
        </ul>
      </div>
      <hr/>
      <h4>Your Progress</h4> <p>(1/4 complete)</p>
      <div class="btn-group">
        <button class="btn btn-default">Industry Knowledge 1</button>
        <button class="btn btn-default">Industry Knowledge 2</button>
        <button class="btn btn-default">Industry Knowledge 3</button>
        <button class="btn btn-default">Industry Knowledge 4</button>
      </div>
    </div>
  )
}

export default Jumbotron