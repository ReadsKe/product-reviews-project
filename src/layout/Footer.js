import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div>
    <footer className=" bg-light">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-black" >
        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/">About</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/">New Product Listing</Link></li>
        </ul>
        <p className="text-center text-black"> © 2022 Phone Store, Inc</p>
    </footer>
    </div>
  )
}
