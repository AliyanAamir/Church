import React from 'react'
import UsersNavbar from '../Components/Users/UsersNavbar'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <>
    <UsersNavbar/>
    <Outlet/>
    </>
  )
}
