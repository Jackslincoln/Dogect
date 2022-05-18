import React from 'react';
import {Fondo, Centro, Title, Subtitle, Button2} from './styles';
import { Link } from 'react-router-dom';



export const Landing = (
{


}
) =>
(
    <div>
        <Fondo img={"https://imgur.com/Bb1Flul.jpeg"} >
            <Centro>
                <Title>Dogect</Title>
                <Subtitle>Descubre la nueva forma de planificar tus proyectos</Subtitle>
                <Link to={"/signup"} style={{textDecoration:"none"}}>
                  <Button2>¡Únete gratis!</Button2>
                </Link>
            </Centro>
        </Fondo>

    </div>

);
