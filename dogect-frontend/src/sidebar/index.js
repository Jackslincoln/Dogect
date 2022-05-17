import React from 'react';
import {} from 'react-bootstrap';
import {Containerr, Sidebarr, Star, Top3, Top, Numero, Perfil3, NameHueso, NameSide, Huesos, Huesito,
        Separador, Top2, Perfil2, NameHueso2, NameSide2, Rango, Huesos2, Huesito2} from './styles';
//import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';
import {faStar, faBone} from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Modal, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Sidebarx extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };
        
    };

    render() {
        return(
            
            <Sidebarr>
                <Star>
                    <FontAwesomeIcon icon = {faStar}></FontAwesomeIcon>
                    <Top3>Los mejores 3</Top3>
                    <FontAwesomeIcon icon = {faStar}></FontAwesomeIcon>
                </Star>
                <Top>
                    <Numero>1</Numero>
                    <Perfil3 img={"https://i.pinimg.com/474x/0d/42/18/0d4218246aebac5ad2ea345775889176.jpg"}></Perfil3>
                    <NameHueso>
                        <NameSide>Bennet Lawrence</NameSide>
                        <Huesos>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                        </Huesos>
                    </NameHueso>

                </Top>
                <Top>
                    <Numero>2</Numero>
                    <Perfil3 img={"https://i.pinimg.com/474x/0d/42/18/0d4218246aebac5ad2ea345775889176.jpg"}></Perfil3>
                    <NameHueso>
                        <NameSide>The magician</NameSide>
                        <Huesos>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                        </Huesos>
                    </NameHueso>

                </Top>
                <Top>
                    <Numero>3</Numero>
                    <Perfil3 img={"https://i.pinimg.com/474x/0d/42/18/0d4218246aebac5ad2ea345775889176.jpg"}></Perfil3>
                    <NameHueso>
                        <NameSide>Octopus Pride</NameSide>
                        <Huesos>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                            <Huesito><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito>
                        </Huesos>
                    </NameHueso>

                </Top>

                <Separador>Todos los integrantes:</Separador>

                <Top2>
                    <Perfil2 img={"https://i.pinimg.com/474x/0d/42/18/0d4218246aebac5ad2ea345775889176.jpg"}></Perfil2>
                    <NameHueso2>
                        <NameSide2>Ayato Hackerman</NameSide2>
                        <Rango>Cachorro</Rango>
                        <Huesos2>
                            <Huesito2><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito2>
                            <Huesito2><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito2>
                        </Huesos2>

                    </NameHueso2>
                </Top2>
                <Top2>
                    <Perfil2 img={"https://i.pinimg.com/474x/0d/42/18/0d4218246aebac5ad2ea345775889176.jpg"}></Perfil2>
                    <NameHueso2>
                        <NameSide2>Zhongli GOD SUPREMO</NameSide2>
                        <Rango>Adulto</Rango>
                        <Huesos2>
                            <Huesito2><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito2>
                            <Huesito2><FontAwesomeIcon icon = {faBone}></FontAwesomeIcon></Huesito2>
                        </Huesos2>

                    </NameHueso2>
                </Top2>

                

             

            </Sidebarr>
        )
    }

    componentDidMount() {}
}

export default Sidebarx;