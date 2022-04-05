import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ListOfCategories } from "./listOfCategories";
import { Navbarl } from "./navbar";
import { Landing } from "./landing";
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div>
     <Navbarl/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
          <Route exact path="/homepage" element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



// export const App = () => (
//     <div>
//         <Navbarl/>
//         <div>
//             <Landing/>
//         </div>
//     </div>


// );
