import React from 'react'
import { Route, Outlet, Navigate } from 'react-router-dom';
import useAuth from './../auth/UseAuth';

export default function PrivateRoute(props) {
  const { user } = useAuth();

  if(!user) {
    console.log("Redirigiendo a login")
    return <Navigate to='/login'/>
  }

  return (
    <Outlet />
  )
}
