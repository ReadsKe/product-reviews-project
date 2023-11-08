import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container ">
    <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted text-light">Home</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted text-light">About</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted text-light">Contact</Link></li>
          </ul>
        <p className="text-center .text-light">© 2022 Company, Inc</p>
    </footer>
    </div>
  )
}
