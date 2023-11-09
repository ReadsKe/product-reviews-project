import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ProductList from '../components/ProductList'
import LandingPage from '../components/LandingPage'


export default function Home() {
  return (
    <div>
        <ProductList />
        <LandingPage />
    </div>
  )
}
