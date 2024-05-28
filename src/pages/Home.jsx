import React from 'react'
import Banner from '../components/home/Banner'
import Banner2 from '../components/home/Banner2'
import Cards from '../components/home/Cards'
import Footer from '../components/home/Footer'
import Main from '../components/home/Main'
import Navbar1 from '../components/home/Navbar1'
import Navbar2 from '../components/home/Navbar2'
import Navbar3 from '../components/home/Navbar3'
import Products from '../components/home/Products'

function Home() {
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        <Banner/>
        <Main/>
        <Products/>
        <Banner2/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home