import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './../components/layouts/Layout';
import { Routes, Navigate, Outlet } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { HomePage } from './../components/pages/HomePage';
import LandingPage from '../components/pages/LandingPage';
import LoginPage from './../components/pages/LoginPage';
import SignupPage from './../components/pages/SignupPage';
import NotFoundPage from './../components/pages/NotFoundPage';
import Equipo from './../equipo/Equipo';
import Navbarl  from '../components/static/navbar';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
  return (
    <Router>
      <Navbarl/>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />} >
            <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route exact path="/landing" element={<LandingPage/>}></Route>

          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/signup" element={<SignupPage/>}></Route>
          <Route exact path="/equipo" element={<PrivateRoute />} >
            <Route exact path="/equipo" element={<Equipo />} />
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
     </Router>
  )
}
