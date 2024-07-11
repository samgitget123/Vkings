import React from 'react'
import { NavLink , Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <header className='header'>
     <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><strong className='text-warning'>V Kings Sportz Arena</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Collections">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/bookings">Bookings</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </header>
    </>
  )
}

export default Navbar