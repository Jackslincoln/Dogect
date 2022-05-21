import React, { useEffect } from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import { Col, Container, Row, Button, Label, Input, FormText } from 'reactstrap';
import { Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modals/modal';
import { ContenedorFormulario } from './../styles/form.styles';
import { ContenedorBotones, Boton, Contenido } from './../styles/modal.styles';
import './../Home/Home';

import Banner from './../Banner/Banner';
import Card from '../Card/Card';
import useAuth from './../../auth/UseAuth';
import changeNameResolver from '../../validations/changeNameResolver';


export const HomePage = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);  //UserInfo
  const [estadoModal2, cambiarEstadoModal2] = useState(false);  //CreateManada1
  const [estadoModal3, cambiarEstadoModal3] = useState(false);  //CreateManada2
  const [estadoModal4, cambiarEstadoModal4] = useState(false);  //DeleteUser

  const openDeleteModal = () => {
    cambiarEstadoModal4(true);
    cambiarEstadoModal1(false);
  }
  const closeDeleteModal = () => cambiarEstadoModal4(false);
  const handleDelete = () => {
    //Peticiones
    //closeDeleteModal
    logout();
  }

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState : { errors }
  } = useForm({
      reValidateMode:"onChange",
    });


  const onSubmit = (formData) => {
    alert('cambios guardados exitosamente');
  }

  const { user } = useAuth();
  const { logout } = useAuth();

  useEffect(() => {
    const subs = watch((value, {name, type}) => console.log(value, name, type));
    return ( ) => subs.unsubscribe ();
  }, [watch, user]);


  return (
    <div className='home'>
      <Banner/>

      <Container className='home_content w-75 container-fluid' >
        {/*--- Contenido de la pagina ---*/}
        <Row>
          {/*--- Info de usuario ---*/}
          <Col className='home_userInfo' md={3}>
            <Row style={{marginTop: "-80px"}}>
              <Col className="shadow p-3"
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: 'white',
                }}
              >
                <Container>
                  <Row className='d-flex justify-content-center'>
                    <Col md={8} style={{padding: "15px"}}>
                      <img src={user?.img??"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} className="img-fluid" alt="Responsive image" style={{borderRadius:"60px"}}/>
                    </Col>
                  </Row>
                  <Row className='justify-content-center'>
                    <b style={{fontSize: "30px", color: "#414141"}}>{user?.name}</b>
                    <p style={{color: "#949494", textAlign:"center"}}># manadas</p>
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

          {/*--- Contenido derecho ---*/}
          <Col md={9} style={{marginBottom: "130px"}}>
            {/*--- Titulo + Boton ---*/}
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

              {/*--- Lista de manadas ---*/}
              <Row>
                <Col md={6}>
                  <Card
                    src="https://imgur.com/wkYmAFw.jpg"
                    title="☼Insolaris☼"
                    creatorImg="https://imgur.com/pGW2bf6.png"
                    creator="Alessandra Muñoz"
                    numUsers="30"
                  />
                </Col>
                <Col md={6}>
                  <Card
                    src="https://miro.medium.com/max/1000/1*c-OSpkWa5UtyFU5P58DKDw.jpeg"
                    title="Post"
                    creatorImg="https://lastfm.freetls.fastly.net/i/u/770x0/639def2660f45584a8f9e3f9bfee1e23.jpg"
                    creator="Björk Guðmundsdóttir"
                    numUsers="30"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card
                    src="https://i.pinimg.com/originals/6c/be/e0/6cbee0926727bbfcf2354976e3fa8825.jpg"
                    title="Heaven or Las Vegas"
                    creatorImg="https://imgur.com/ch3eDTZ.jpg"
                    creator="Cocteau Twins"
                    numUsers="30"
                  />
                </Col>
                <Col md={6}>
                  <Card
                    src="https://imgur.com/UKA6lJB.jpeg"
                    title="Hunky Dory"
                    creatorImg="https://uploads4.wikiart.org/00282/images//unnamed.jpg!Portrait.jpg"
                    creator="David Bowie"
                    numUsers="30"
                  />
                </Col>
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
              <Button type='submit' color="warning" outline onClick={handleSubmit(onSubmit)}>Guardar cambios</Button>
            </Col>
            <Col>
              <Button  outline onClick={openDeleteModal}>Eliminar cuenta</Button>
            </Col>
          </Row>
        }
        mostrarFooter={true}
        mostrarOverlay={true}
      >
        <Contenido>
          <h1>Editar perfil</h1>
          <img src={user?.img??"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} className="img-fluid" alt="Responsive image" style={{borderRadius:"90px"}}/>

          <Formik onSubmit={handleSubmit(onSubmit)}   >
              <ContenedorFormulario className='formulario'>
                  <div>
                    <Label htmlFor='name'>Nombre :</Label>
                    <input {...register("name", {required:"Error: nombre obligatorio"})}/>
                    {errors.name && (
                      <div >
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor='correo'>Correo :</Label>
                    <Input type='email' id='correo' name='correo' placeholder='Correo...'></Input>
                  </div>
                  <div>
                    <Label htmlFor='contra'>Contraseña :</Label>
                    <Input type='password' id='contra' name='contra' placeholder='Contraseña...'></Input>
                  </div>
                </ContenedorFormulario>

          </Formik>
          <Row>
            <Col>
              <React.StrictMode>
                <div className='contenedor'></div>
              </React.StrictMode>
            </Col>
          </Row>
        </Contenido>
      </Modal>

      {/*Eliminar cuenta*/}
      <Modal
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
        footer={
          <Row>
            <Col>
              <Button type='submit' color="warning" outline onClick={handleDelete}>Aceptar</Button>
            </Col>
            <Col>
              <Button  outline onClick={() => cambiarEstadoModal4(!estadoModal4)}>Cancelar</Button>
            </Col>
          </Row>
        }
        mostrarFooter={true}
        mostrarOverlay={true}
      >
        <Contenido>
          <h1>Eliminar cuenta</h1>
          <p>¿Estas seguro de querer eliminar tu cuenta? <br/> Se perderán tus datos.</p>
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
          <Formik
            onSubmit={() => {
              alert('Formulado enviado!')
            }}
          >
            {({handleSubmit}) => (
              <ContenedorFormulario onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor='nombreManada'>Nombra tu manada :</Label>
                  <Input type='text' id='nombreManada' name='nombre/manada' placeholder='Nombre...'></Input>
                </div>
                <div>
                  <Label htmlFor='correo'>Añade una descripción :</Label>
                  <Input type='textarea' id='correo' name='correo' placeholder='Descripción...' style={{fontSize:"14px"}}></Input>
                </div>
              </ContenedorFormulario>
            )}
          </Formik>
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
          <ContenedorFormulario>
            <Row>
              <Col md={9}>
                <Label htmlFor='nombreMiembro'>Busca a un miembro :</Label>
                <Input type='text' id='nombreMiembro' name='nombreMiembro' placeholder='Nombre...'></Input>
              </Col>
              <Col md={3} style={{marginTop:"30px"}}>
                <Button color="warning" outline>Añadir</Button>
              </Col>
            </Row>
          </ContenedorFormulario>
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
