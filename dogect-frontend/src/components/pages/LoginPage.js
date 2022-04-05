import React from 'react';
import { Container, Row, Button, Col, Input, Form, FormGroup, FormText, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div className='bg-image' style={{backgroundImage: "url('https://imgur.com/Uq0iB4d.jpg')"}}>
        <Container>
          <Row style={{marginBottom: "10%"}}>
            <Col>
              <Link to={"/landing"}>
                <Button color='none'>
                  <img src="https://imgur.com/CZPzCt0.png" className='img-fluid' alt="Responsive image" width="10%"/>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col md={5}>
              <Row className="d-flex justify-content-center" style={{marginBottom: "60px"}}>
                <img src="https://imgur.com/gzXMzZj.png" className='img-fluid' alt="Responsive image" style={{width: "15%"}}/>
              </Row>
              <Row className="justify-content-center" style={{marginBottom: "50px"}}>
                  <Input type="text" className='form-control form-rounded' placeholder='@ Correo...' style={{borderRadius: "20px", width:"80%", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px", fontSize: "14px", marginBottom: "20px"}}></Input>
                  <Input type="password" className='form-control form-rounded' placeholder='⌨ Contraseña...' style={{borderRadius: "20px", width:"80%", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px", fontSize: "14px", marginBottom: "20px"}}></Input>
              </Row>
              <Row className="justify-content-center" style={{marginBottom: "50%"}}>
                <Link to={"/"}>
                  <Button color="warning" size="lg" outline style={{borderRadius: "20px", width:"80%", fontSize: "14px" }}>
                    Iniciar sesión
                  </Button>
                </Link>
                <Label>
                Aún no tienes cuenta?
                <Link style={{color:"#C3B029"}} to={"/"}> Regístrate</Link>
              </Label>
              </Row>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col>
              <Label>
                © 2022
                <Link style={{color:"#C3B029"}} to={"/landing"}> Dogect</Link>
                , Inc.
              </Label>

            </Col>
          </Row>
        </Container>
      </div>

    )
  }

  componentDidMount() {}
}

export default LoginPage;
