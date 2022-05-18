import React, { useState } from "react";
import { Landing } from "./landing";
import { Sidebar } from "./sidebar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {HomePage} from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from "./components/pages/SignupPage";
import LandingPage from './components/pages/LandingPage';
import Equipo from "./equipo/Equipo";


import Sidebarx from './sidebar/index';
import Home from './components/Home/Home';
import Footer from './components/static/Footer/Footer';
import { Helmet } from "react-helmet";
import NotFoundPage from './components/pages/NotFoundPage';
import Layout from './components/layouts/Layout';
import { Navbarl } from './components/static/navbar/index';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dogect</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="El administrador de tareas" />
      </Helmet>

     <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/landing" element={<LandingPage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
          <Route exact path="/signup" element={<SignupPage/>}></Route>
          <Route exact path="/equipo" element={<Equipo/>}></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Layout>
     </Router>



    {/*--- EL ORDEN DE TODO ---*/}
    {/* Home */}
      {/* Navbar */}
        {/* Banner */}
        {/* User Info */}
        {/* Cards */}
      {/* Footer */}

    {/* Manada */}
      {/* Navbar */}
      {/* Footer */}
    </div>
  );
}

export default App;
