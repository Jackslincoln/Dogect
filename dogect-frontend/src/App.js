import React from "react";
import { Navbarl, EntraClick} from "./navbar";
import { Landing } from "./landing";
import { Sidebar } from "./sidebar";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Navbarl/>
        <div>
            <Sidebar/>
        </div>
    </div>
  );
}

export default App;
