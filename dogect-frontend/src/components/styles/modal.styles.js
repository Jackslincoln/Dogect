import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

export const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Boton = styled.button`
  display: block;
  padding: 10px 40px;
  border-radius: 20px;
  color: #fff;
  border: none;
  background: #ffaa32;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: .3s ease all;

  &:hover {
    background: #f0ad4e;
  }
`;

export const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  padding: 20px;
  margin-bottom: 20px;

	h1 {
		font-size: 30px;
		font-weight: 700;
    color: #4D4D4D;
	}
	img {
		width: 30%;
		vertical-align: top;
		border-radius: 3px;
		margin-top: 40px;

	}
  p {
		font-size: 14px;
    color: #ABABAB;
    padding: 10px;
		margin-bottom: 20px;
	}

`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0);'} ;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorModal = styled.div`
  width: 600px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
  padding: 30px;
`;

export const FooterModal = styled.div`
  display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  border-top: 1px solid #E8E8E8;
  Button {
    border-radius: 20px;
    font-size: 14px;
    width: 150px;
  }
`;

export const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766dc;
  &:hover {
    background: #f2f2f2;
  }

`;
