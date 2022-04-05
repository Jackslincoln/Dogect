import React from "react";
import { Navbarl, EntraClick} from "./navbar";
import { Landing } from "./landing";
import { Sidebar } from "./sidebar";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
