import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div class="container ">
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted text-light">Home</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted text-light">About</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link px-2 text-muted text-light">Contact</Link></li>
          </ul>
        <p class="text-center .text-light">© 2022 Company, Inc</p>
    </footer>
    </div>
  )
}
