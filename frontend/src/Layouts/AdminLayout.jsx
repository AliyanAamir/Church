import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Components/Admin/AdminNavbar'

export default function AdminLayout() {
  return (
    <>
   <AdminNavbar/>
    <Outlet/>
    
    </>
  )
}
