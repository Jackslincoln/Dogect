import React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modals/modal';
import { ContenedorBotones, Boton, Contenido } from './../styles/modal.styles';
import { Manada } from './../manada/manada';
import ManadaList from './../manada/manadaList';
import { ModalTitle } from 'react-bootstrap';

export const HomePage = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
        <img src="https://imgur.com/RPYyBqm.jpg" className="img-fluid" alt="Responsive image"/>

        <Container className='w-75 container-fluid' >
          <Row>
            <Col md={3}>
              <Row style={{marginTop: "-80px"}}>
                <Col className=" shadow p-3"
                  style={{
                    padding: "20px",
                    borderRadius: "20px",
                    backgroundColor: 'white',
                  }}
                >
                  <Container>
                    <Row className='d-flex justify-content-center'>
                      <Col md={8} style={{padding: "15px"}}>
                        <img src="https://imgur.com/UU2uLQF.png" className="img-fluid" alt="Responsive image" />
                      </Col>
                    </Row>
                    <Row className='justify-content-center'>
                      <b style={{fontSize: "30px", color: "#414141"}}>Nombre de Usuario</b>
                      <p style={{color: "#949494"}}># manadas</p>
                      <Col md={8} style={{marginBottom: "20px"}}>
                        <ContenedorBotones >
                          <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Editar perfil</Boton>
                        </ContenedorBotones>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Col>

            <Col md={9} style={{marginBottom: "130px"}}>
              <Row>
                <Col md={4} className="d-flex align-items-start" style={{padding: "20px", marginLeft: "60px", marginTop:"30px"}}>
                  <b  style={{fontSize: "36px", color: "#333333"}}>Mis manadas</b>
                </Col>
                <Col md={5} className="d-flex align-items-start" style={{paddingTop: "15px"}}>
                  <ContenedorBotones >
                   <Boton className='btn-sm' outline onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                      <FontAwesomeIcon icon={faUserPlus} /> Crear una manada
                    </Boton>
                  </ContenedorBotones>
                </Col>
                <Col md={2} className="d-flex align-items-start" style={{marginTop: "-50px"}}>
                  <Button className='btn-circle' color='warning' outline style={{borderRadius: "60px"}}>
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </Col>

                <Row style={{marginTop: "30px"}}>
                  <Container>
                    <Col>
                      <Container>
                        <Row>
                          <Col md={6}>
                            <Manada  />
                          </Col>
                          <Col md={6}>
                            <Manada />
                          </Col>
                          <Col md={6}>
                            <Manada />
                          </Col>
                          <Col md={6}>
                            <Manada />
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Container>
                </Row>
              </Row>
            </Col>
          </Row>
         </Container>

        {/*--- MODALES ---*/}
        {/*Editar Perfil*/}
         <Modal
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
            footer={
              <Row>
                <Col>
                  <Button color="warning" outline onClick={() => cambiarEstadoModal1(!estadoModal1)}>Guardar cambios</Button>
                </Col>
                <Col>
                  <Button outline onClick={() => cambiarEstadoModal1(!estadoModal1)}>Eliminar cuenta</Button>
                </Col>
              </Row>
            }
            mostrarFooter={true}
            mostrarOverlay={true}
          >
            <Contenido>
              <h1>Editar perfil</h1>
              <img src="https://imgur.com/UU2uLQF.png" className="img-fluid" alt="Responsive image"/>
            </Contenido>
          </Modal>
        {/*Crear Manada 1*/}
          <Modal
            estado={estadoModal2}
            cambiarEstado={cambiarEstadoModal2}
            footer={
              <Row>
                <Col>
                  <Button color="warning" outline onClick={() => cambiarEstadoModal3(!estadoModal3)}>Siguiente</Button>
                </Col>
              </Row>
            }
            mostrarFooter={true}
            mostrarOverlay={true}
          >
            <Contenido>
              <h1>Crear manada</h1>
              <p>Una forma simple de trabajar junto a un grupo de personas como una gran familia</p>
              <h2>*AQUI VA UN FORMS*</h2>
            </Contenido>
          </Modal>
        {/*Crear Manada 2*/}
        <Modal
            estado={estadoModal3}
            cambiarEstado={cambiarEstadoModal3}
            footer={
              <Row>
                <Col>
                  <Button outline onClick={() => cambiarEstadoModal3(!estadoModal3)}>Atras</Button>
                </Col>
                <Col>
                  {/*en esta se tienen que cerrar las dos*/}
                  <Button color="warning" outline onClick={() => cambiarEstadoModal3(!estadoModal3)}>Crear manada</Button>
                </Col>
              </Row>
            }
            mostrarFooter={true}
            mostrarOverlay={false}
          >
            <Contenido>
              <h1>Añade miembros a tu manada</h1>
              <p>Una forma simple de trabajar junto a un grupo de personas como una gran familia</p>
              <h2>*AQUI VA UN FORMS*</h2>
            </Contenido>
          </Modal>

      </div>
  );
}







// class HomePage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       someKey: 'someValue'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <img src="https://imgur.com/RPYyBqm.jpg" className="img-fluid" alt="Responsive image"/>

//         <Container className='w-75 container-fluid' >
//           <Row>
//             <Col md={3}>
//               <Row style={{marginTop: "-80px"}}>
//                 <Col className=" shadow p-3"
//                   style={{
//                     padding: "20px",
//                     borderRadius: "20px",
//                     backgroundColor: 'white',
//                   }}
//                 >
//                   <Container>
//                     <Row className='d-flex justify-content-center'>
//                       <Col md={8} style={{padding: "15px"}}>
//                         <img src="https://imgur.com/UU2uLQF.png" className="img-fluid" alt="Responsive image" />
//                       </Col>
//                     </Row>
//                     <Row className='justify-content-center'>
//                       <b style={{fontSize: "30px", color: "#414141"}}>Nombre de Usuario</b>
//                       <p style={{color: "#949494"}}># manadas</p>
//                       <Col md={8} style={{marginBottom: "20px"}}>
//                         <ContenedorBotones>
//                           <Boton>Modal 1</Boton>
//                         </ContenedorBotones>
//                         <Modal>
//                           <Contenido>
//                             <h1>Editar perfil</h1>
//                             <img src="https://imgur.com/UU2uLQF.png" className="img-fluid" alt="Responsive image"/>
//                             <Row>
//                               <Col>
//                                 <Button color="warning" outline>Guardar cambios</Button>
//                               </Col>
//                               <Col>
//                                 <Button outline>Eliminar cuenta</Button>
//                               </Col>
//                             </Row>
//                           </Contenido>
//                         </Modal>

//                       </Col>
//                     </Row>
//                   </Container>
//                 </Col>
//               </Row>
//             </Col>

//             <Col md={9} style={{marginBottom: "130px"}}>
//               <Row>
//                 <Col md={4} className="d-flex align-items-start" style={{padding: "20px", marginLeft: "60px", marginTop:"30px"}}>
//                   <b  style={{fontSize: "36px", color: "#333333"}}>Mis manadas</b>
//                 </Col>
//                 <Col md={5} className="d-flex align-items-start" style={{padding: "30px", marginTop: "30px"}}>
//                   <Button className='btn-sm' color='warning' outline>
//                     <FontAwesomeIcon icon={faUserPlus} /> Crear una manada
//                   </Button>
//                 </Col>
//                 <Col md={2} className="d-flex align-items-start" style={{marginTop: "-50px"}}>
//                   <Button className='btn-circle' color='warning' outline style={{borderRadius: "60px"}}>
//                     <FontAwesomeIcon icon={faPen} />
//                   </Button>
//                 </Col>

//                 <Row style={{marginTop: "30px"}}>
//                   <Container>
//                     <Col>
//                       <Container>
//                         <Row>
//                           <Col md={6} >
//                             <Manada
//                               id={"623cdf6e638286e5f8e51570"}
//                               callbackMessage={this.cllbckManadaMessage}
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Manada
//                               id={"623cdf6e638286e5f8e51570"}
//                               callbackMessage={this.cllbckManadaMessage}
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Manada
//                               id={"623cdf6e638286e5f8e51570"}
//                               callbackMessage={this.cllbckManadaMessage}
//                             />
//                           </Col>
//                           <Col md={6}>
//                             <Manada
//                               id={"623cdf6e638286e5f8e51570"}
//                               callbackMessage={this.cllbckManadaMessage}
//                             />
//                           </Col>
//                         </Row>
//                       </Container>
//                     </Col>
//                   </Container>
//                 </Row>
//               </Row>
//             </Col>
//           </Row>
//          </Container>


//       </div>
//     )
//   }

//   componentDidMount() {}
// }

// export default HomePage;
