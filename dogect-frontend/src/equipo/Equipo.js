import React from 'react';
import {} from 'react-bootstrap';
import { Container, Row, Button, Col, Input, Form, FormGroup, FormText, Label } from 'reactstrap';
import {Contentx, Division, Sidee, EquipoAll, EquipoTitle, EquipoyEditor, Lapiz,
        Segundafila, Creador, EquipoDesc, RolesTitle, RolBus, Tabla, Fila, Borrar,
        Usuario, Roles, Descripcion} from './styles';
import {faPencilAlt, faTrashAlt, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebarx from "../sidebar/index";


class Equipo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };
        
    };

    render() {
        return(
            <Division>
               
                <Sidebarx/>
                <Sidee></Sidee> 
                <Contentx>
                    <img src="https://imgur.com/RPYyBqm.jpg" className="img-fluid" alt="Responsive image"/>
                    <EquipoAll>
                        <EquipoyEditor>
                            <EquipoTitle>The Avalanches</EquipoTitle>
                        </EquipoyEditor>
                        <Segundafila>
                            <Lapiz><FontAwesomeIcon icon = {faPencilAlt} ></FontAwesomeIcon></Lapiz>
                            <Creador>Omar Dávila</Creador>
                        </Segundafila>
                        <EquipoDesc>
                            Este es un texto de prueba para rellenar un párrafo. Buenas tardes profesor,
                            espero esté disfrutando de la vista jaja, pero la vista de la ventana, vaya que
                            buen comediante soy xdxd.
                            Bueno me voy retirando, saludos profe, nos vemos en la siguiente clase!.
                        </EquipoDesc>
                        <RolBus>
                            <RolesTitle>Roles</RolesTitle>
                            <Input type="text" className='form-control form-rounded' placeholder='Buscar rol...' style={{borderRadius: "20px", width:"60%", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px", fontSize: "14px", marginTop: "20px", marginLeft: "10px"}}></Input>
                        </RolBus>
                        <Tabla>
                            <Fila backcolor='#ffffff'>
                                <Borrar>
                                <FontAwesomeIcon icon = {faMinus} ></FontAwesomeIcon>
                                </Borrar>
                                <Usuario>Usuario</Usuario>
                                <Roles>Roles</Roles>
                                <Descripcion>Descripción</Descripcion>
                            </Fila>
                            <Fila backcolor='#cfcfcf'>
                                <Borrar>
                                <FontAwesomeIcon icon = {faTrashAlt} ></FontAwesomeIcon>
                                </Borrar>
                                <Usuario>Omar Dávila</Usuario>
                                <Roles>Programador</Roles>
                                <Descripcion>Encargado de la programación de The Avalanches</Descripcion>
                            </Fila>
                            <Fila backcolor='white'>
                                <Borrar>
                                <FontAwesomeIcon icon = {faTrashAlt} ></FontAwesomeIcon>
                                </Borrar>
                                <Usuario>Samita</Usuario>
                                <Roles>Camarógrafa</Roles>
                                <Descripcion>Se encarga de grabar la programación</Descripcion>
                            </Fila>
                            <Fila backcolor='#d29898'>
                                <Borrar>
                                <FontAwesomeIcon icon = {faPlus} ></FontAwesomeIcon>
                                </Borrar>
                                <Usuario>Agregar</Usuario>
                                <Roles></Roles>
                                <Descripcion></Descripcion>
                            </Fila>
                        </Tabla>
                        

                        
                        
                    </EquipoAll>
                </Contentx>

                

            </Division>
            
        )
    }

    componentDidMount() {}
}

export default Equipo;