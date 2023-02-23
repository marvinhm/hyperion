import React from "react";
import studentLogo from "../../public/assets/student.png";

function Navbar() {
  return (
    <div class="nav navigation-bar">
      <div className="left">
        <div className="logo"></div>
        <div className="nav-title mobile-title">
          <h1>Get mentor support</h1>
        </div>
        <div className="nav-title desktop-title">
          <h1>Full Stack Web Developer Bootcamp</h1>
        </div>
      </div>

      <div className="dropdown">
        <div
          className="right dropdown-toggle"
          data-toggle="dropdown"
          id="dropdownMenu1"
        >
          <div className="user-img">
            <img src={studentLogo} alt="..." class="img-circle" />
          </div>
          <div className="user-profile-link"></div>
          <p>Profile</p>
        </div>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">
              Edit Profile
            </a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
