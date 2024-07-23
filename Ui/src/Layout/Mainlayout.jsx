import React from 'react'
import NavbarHomepage from '../components/NavbarHomepage'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
   <>
   <NavbarHomepage/>
   <Outlet/>
   {/* <Footer/> */}
   
   </>
  )
}

export default Mainlayout
