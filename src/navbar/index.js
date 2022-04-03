import React from 'react';
import {Button, Col, Nav, Image, img, Form, Navbar, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
//import logotipo from '/images/logotipo.png'

export const Navbarl = (
{
	//Estos son los default
	iconName="tv",
	color="primary",
	text="Categoria",
	path="https://www.google.com"
}
) =>
(
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Collapse className="justify-content-end">
               <Button variant="light">Light</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
	
    
    //<Col><Button variant={color} href={path}><h1>{text}</h1> <FontAwesomeIcon icon = {icons[iconName]}></FontAwesomeIcon></Button></Col>
);