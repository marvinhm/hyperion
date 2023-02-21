import React from 'react'

function Navbar() {
  return (
    <div class='navigation-bar'>
      <div className='left'>
        <div className='logo'> 

        </div>
        <div className='nav-title mobile'>
          <h1>Get mentor support</h1>
        </div>
        <div className='nav-title desktop'>
          <h1>Full Stack Web Developer Bootcamp</h1>
        </div>
      </div>

      <div className='right'>
        <div className=''>
          User
        </div>
      </div>
    </div>
  )
}

export default Navbar