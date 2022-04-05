import React from 'react';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Manada } from './../manada/manada';
import ManadaList from './../manada/manadaList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <img src="https://imgur.com/RPYyBqm.jpg" class="img-fluid" alt="Responsive image"/>

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
                        <img src="https://imgur.com/UU2uLQF.png" class="img-fluid" alt="Responsive image" />
                      </Col>
                    </Row>
                    <Row className='justify-content-center'>
                      <b style={{fontSize: "30px", color: "#414141"}}>Nombre de Usuario</b>
                      <p style={{color: "#949494"}}># manadas</p>
                      <Col md={8} style={{marginBottom: "20px"}}>
                        <Button color='warning' outline onClick={this.toggle}>
                          Editar perfil
                        </Button>
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
                <Col md={5} className="d-flex align-items-start" style={{padding: "30px", marginTop: "30px"}}>
                  <Button className='btn-sm' color='warning' outline>
                    <FontAwesomeIcon icon={faUserPlus} /> Crear una manada
                  </Button>
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
                          <Col md={6} >
                            <Manada
                              id={"623cdf6e638286e5f8e51570"}
                              callbackMessage={this.cllbckManadaMessage}
                            />
                          </Col>
                          <Col md={6}>
                            <Manada
                              id={"623cdf6e638286e5f8e51570"}
                              callbackMessage={this.cllbckManadaMessage}
                            />
                          </Col>
                          <Col md={6}>
                            <Manada
                              id={"623cdf6e638286e5f8e51570"}
                              callbackMessage={this.cllbckManadaMessage}
                            />
                          </Col>
                          <Col md={6}>
                            <Manada
                              id={"623cdf6e638286e5f8e51570"}
                              callbackMessage={this.cllbckManadaMessage}
                            />
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

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <Modal.Title>Editar perfil</Modal.Title>
          </ModalHeader>
          <ModalBody>
            <img src="https://imgur.com/UU2uLQF.png" class="img-fluid" alt="Responsive image" />
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggle}>Guardar cambios</Button>
            <Button onClick={this.toggle}>Eliminar cuenta</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  componentDidMount() {}
}

export default HomePage;
