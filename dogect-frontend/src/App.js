import React from "react";
import { Navbarl, EntraClick} from "./navbar";
import { Landing } from "./landing";
import { Sidebar } from "./sidebar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from "./components/pages/SignupPage";


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/landing" element={<Landing/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/signup" element={<SignupPage/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
