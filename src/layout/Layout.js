import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-dark text-white'>
        <Navbar/>
      
        <div id='main-container' className='container mx-auto'>
           <Outlet/>
        </div>
        
        <Footer/>
    </div>
  )
}