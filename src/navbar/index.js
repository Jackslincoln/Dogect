import React from 'react';
import {Ulx, Lix, Lix2, A, A2, Img, Body, Button1, Button2, Divbuttons} from './styles';
//import {} from '@fortawesome/free-solid-svg-icons';
//import logotipo from '/images/logotipo.png'

export const Navbarl = (
{
	//Estos son los default
	texto1="ENTRA",
    texto2="REGÍSTRATE",
    path="http://www.google.com",
    path2="http://wwwyoutube.com"
}
) =>
(
    
 
        <div>        
            <Ulx>
                <Lix><Img src="https://i.imgur.com/CZPzCt0.png"></Img></Lix>
                <Lix2>
                    <Divbuttons>
                    <Button1 href={path}>{texto1}</Button1>
                    <Button2 href={path2}>{texto2}</Button2>
                    </Divbuttons>
                    
                </Lix2>    
            </Ulx>
        </div>
   
    
	
    
    //<Col><Button variant={color} href={path}><h1>{text}</h1> <FontAwesomeIcon icon = {icons[iconName]}></FontAwesomeIcon></Button></Col>
);