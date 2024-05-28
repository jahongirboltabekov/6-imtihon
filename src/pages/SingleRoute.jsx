import React from 'react'
import Banner2 from '../components/home/Banner2'
import Footer from '../components/home/Footer'
import Navbar1 from '../components/home/Navbar1'
import Navbar2 from '../components/home/Navbar2'
import Navbar3 from '../components/home/Navbar3'
import Singleroute_main from '../components/single/Singleroute_main'

function SingleRoute() {
  return (
    <div>
      <Navbar1/>
      <Navbar2/>
      <Navbar3/>
      <Singleroute_main/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default SingleRoute