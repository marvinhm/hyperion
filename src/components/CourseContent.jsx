import React from 'react'
import Card from './Card'
import Jumbotron from './Jumbotron'
import mobileDev from '../assets/mobile-developer-bootcamp.png'

function CourseContent() {
  return (
    <div className='container-fluid'>
    <div class="row">
      <div class="col-md-6 col-md-offset-1">
        <Jumbotron/>
        <div className='trial-container'>
          <h4>Trial another bootcamp</h4>
          <div className='cards'>
              <Card bodyImg={mobileDev}/>
              <Card bodyImg={mobileDev}/>
          </div>
        
        </div>        
      </div>
      <div class="col-md-4">
        <div className='row'>
            <h4>Title 1</h4>
            <div className='row'>
            <p>thing 1</p>
            <p>thing 2</p>
            </div>
        </div>
        <div className='row'>
            <h4>Title 1</h4>
            <div className='row'>
            <p>thing 1</p>
            <button class="btn btn-default" type="submit">Button</button>
            <button class="btn btn-default" type="submit">Button</button>
            </div>
        </div>
        <div className='row'>
            <h4>Title 1</h4>
            <div className='row'>
            <p>thing 1</p>
            <button class="btn btn-default" type="submit">Button</button>
            <button type="button" class="btn btn-default">Default</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CourseContent