import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><img src="https://png.pngtree.com/template/20190928/ourmid/pngtree-smartphone-shop-sale-logo-design-image_312693.jpg" alt="Logo" className='img-fluid' style={{ maxWidth: "100px", maxHeight: "50px" }}/> </Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/newproduct">New Phone Listings</Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}
