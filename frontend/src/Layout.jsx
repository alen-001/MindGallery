import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout
