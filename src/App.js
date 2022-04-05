import React from "react";
import { ListOfCategories } from "./listOfCategories";
import { Navbarl } from "./navbar";
import { Landing } from "./landing";


export const App = () => (
    <div>
        <Navbarl
            Navbarl={
                [ 
                  {
                    texto1:"ENTRA",
                    texto2:"REGÍSTRATE",
                    path:"http://www.google.com",
                    path2:"http://wwwyoutube.com"
                  }
                ]
            }
        ></Navbarl>
        <div>
            <Landing/>
        </div>
    </div>
    
    
);