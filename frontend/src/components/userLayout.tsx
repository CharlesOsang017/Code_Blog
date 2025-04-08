import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function UserLayout({}: Props) {
  return (
    <div>
    <h2>User Area</h2>
    {/* User Navigation (optional) */}
    <Outlet />
  </div>
  )
}

export default UserLayout