import React from 'react'
import Footer from '../components/home/Footer'
import Navbar2 from '../components/home/Navbar2'
import Navbar3 from '../components/home/Navbar3'
import Login_main from '../components/login/Login_main'

function Login() {
  return (
    <div>
      <Navbar2/>
      <Navbar3/>
      <Login_main/>
      <Footer/>
    </div>
  )
}

export default Login