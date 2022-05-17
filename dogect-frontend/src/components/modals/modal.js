import React from "react";
import { FooterModal, Overlay } from "../styles/modal.styles";
import { ContenedorModal, BotonCerrar } from './../styles/modal.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';


const Modal = ({
  children,
  estado,
  cambiarEstado,
  footer = ' ',
  mostrarFooter,
  mostrarOverlay
}) => {

  return (
    <>
      {estado &&
        <Overlay mostrarOverlay={mostrarOverlay}>
          <ContenedorModal>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <FontAwesomeIcon icon={faXmark} style={{color:"#777777"}}/>
            </BotonCerrar>

            {children}

            {mostrarFooter &&
              <FooterModal>
                {footer}
              </FooterModal>
            }
          </ContenedorModal>
        </Overlay>
      }

    </>
  );
}

export default Modal;
