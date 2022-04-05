import React from 'react';
import { Button, Col, Container, Modal, Row } from 'reactstrap';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };
    this.toggle = this.toggle.bind(this);
};

toggle() {
    this.setState({modal: !this.state.modal});
}

  render() {
    return (
      <div>
        <img src="https://imgur.com/RPYyBqm.jpg" class="img-fluid" alt="Responsive image"/>

        <Container className='w-75' >
          <Row style={{marginTop: "-80px"}}>
            <Col md={4} className="shadow p-3"
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: 'white',
              }}
            >
              <Row className='d-flex justify-content-center'>
                <Col md={5} style={{padding: "15px"}}>
                  <img src="https://imgur.com/UU2uLQF.png" class="img-fluid" alt="Responsive image" />
                </Col>
              </Row>
              <Row className='justify-content-center'>
                <b style={{fontSize: "30px", color: "#333333"}}>Nombre de Usuario</b>
                <p style={{color: "#949494"}}># manadas</p>
                <Col md={8} style={{marginBottom: "20px"}}>
                <Button color='warning' outline onClick={this.toggle}>
                      Editar perfil
                </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{width: "200px", display: "block"}}>
          <Modal.Header closeButton>
            <Modal.Title>Editar perfil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="https://imgur.com/UU2uLQF.png" class="img-fluid" alt="Responsive image" />
          </Modal.Body>
          <Modal.Footer>
            <Button color="warning" onClick={this.toggle}>Guardar cambios</Button>
            <Button onClick={this.toggle}>Eliminar cuenta</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  componentDidMount() {}
}

export default HomePage;
