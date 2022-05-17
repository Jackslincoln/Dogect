import React, { useState } from "react";
import { Navbarl} from "./navbar";
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

function App() {
  return (
    <div className="App">
      <Navbarl/>
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/landing" element={<LandingPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/signup" element={<SignupPage/>}></Route>
        <Route exact path="/equipo" element={<Equipo/>}></Route>
      </Routes>
     </Router>


    </div>
  );
}

export default App;
