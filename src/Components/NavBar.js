import React from 'react'


function NavBar() {
    return(
      <div className = "nav-bar">
          <h2></h2>
          <nav id="navigation">

          <a href="/makereservation">
          Make A Reservation
          </a>

          <a href="/searchreservation">
          Search For Existing Reservation
          </a>

          <a href="/about">
          About
          </a>

          </nav>
      </div>
    )

}

export default NavBar;