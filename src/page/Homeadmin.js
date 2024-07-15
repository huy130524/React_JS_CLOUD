import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../compoment/Sidebar'

const Homeadmin = () => {
  return (
    <div>
        <Outlet />
   
    </div>
  )
}

export default Homeadmin