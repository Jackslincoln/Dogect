import React from 'react';
import {Ulx, Lix, Lix2, Img, Button1, Button2, Divbuttons} from './styles';

//import logotipo from '/images/logotipo.png'



export const Navbarl = (
{
	//Estos son los default
	texto1="ENTRA",
    texto2="REGÍSTRATE",
    path="http://www.google.com",
    path2="http://www.youtube.com"
}
) =>
(
  <div>
    <Ulx>
      <a href='/landing'>
      <Lix>
          <Img src="https://i.imgur.com/CZPzCt0.png" />
      </Lix>
      </a>

      <Lix2>
        <Divbuttons>
          <a href='/login' style={{textDecoration:"none"}}>
            <Button1 >ENTRA</Button1>
          </a>
          <a href='/signup' style={{textDecoration:"none"}}>
            <Button2  href="/signup">REGISTRATE</Button2>
          </a>
        </Divbuttons>

      </Lix2>
                {/* Mira primero lo voy a poner asi a lo berserk
                <Lix2>
                    <Divbuttons>
                    <Button1  href={path}>{texto1}</Button1>
                    <Button2  href={path2}>{texto2}</Button2>
                    </Divbuttons>
                </Lix2> */}
      </Ulx>
    </div>

    //<Col><Button variant={color} href={path}><h1>{text}</h1> <FontAwesomeIcon icon = {icons[iconName]}></FontAwesomeIcon></Button></Col>
);
