import React from 'react'
import { Route, Outlet, Navigate } from 'react-router-dom';
import useAuth from './../auth/UseAuth';

export default function PublicRoute(props) {
  const { user } = useAuth();

  // if(user) {
  //   console.log("Redirigiendo a home")
  //   return <Navigate to='/'/>
  // }

  return (
    <Outlet />
  )
}
