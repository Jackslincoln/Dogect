import React from 'react';
import { Container, Row, Col, Button, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarCheck, faFileEdit } from '@fortawesome/free-solid-svg-icons';


class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div className='bg-image' style={{backgroundImage: "url('https://imgur.com/AWNQN1o.jpg')", backgroundSize:"cover"}}>
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
            <Col md={4}>
              <Row style={{marginBottom:"20px"}}>
                <Col md={2}>
                  <FontAwesomeIcon icon={faUser} style={{height:"50%", color:"white"}}/>
                </Col>
                <Col md={10} className="d-flex justify-content-left">
                  <Label style={{fontWeight:"bold", fontSize:"24px", color:"white"}}> Crea grupos</Label>
                </Col>
                <Row style={{paddingLeft:"80px", marginTop:"-10px"}}>
                    <p style={{textAlign:"left", fontSize:"14px", color:"white", paddingRight:"30px"}}>
                      Varios pueden trabajar en algo diferente, no todos tienen que centrarse en los mismo.
                    </p>
                </Row>
              </Row>
              <Row style={{marginBottom:"20px"}}>
                <Col md={2}>
                    <FontAwesomeIcon icon={faCalendarCheck} style={{height:"50%", color:"white"}}/>
                  </Col>
                  <Col md={10} className="d-flex justify-content-left">
                    <Label style={{fontWeight:"bold", fontSize:"24px", color:"white"}}> Analiza el proceso</Label>
                  </Col>
                  <Row style={{paddingLeft:"80px", marginTop:"-10px"}}>
                      <p style={{textAlign:"left", fontSize:"14px", color:"white", paddingRight:"30px"}}>
                      Añade fechas a las tareas, nunca sucumbirás ante el mounstro de la procrastinación!
                      </p>
                  </Row>
              </Row>
              <Row style={{marginBottom:"20px"}}>
                <Col md={2}>
                    <FontAwesomeIcon icon={faFileEdit} style={{height:"50%", color:"white"}}/>
                  </Col>
                  <Col md={10} className="d-flex justify-content-left">
                    <Label style={{fontWeight:"bold", fontSize:"24px", color:"white"}}> Crea notas</Label>
                  </Col>
                  <Row style={{paddingLeft:"80px", marginTop:"-10px"}}>
                      <p style={{textAlign:"left", fontSize:"14px", color:"white", paddingRight:"30px"}}>
                        No volverás a perderte en instrucciones que no recuerdas.
                      </p>
                  </Row>
              </Row>
            </Col>
            <Col md={4} style={{backgroundColor:"white", borderRadius:"8px", padding:"40px", marginBottom:"10%"}}>
              <Container >
                <Row>
                  <Label style={{fontWeight:"bold", fontSize:"30px"}}>Regístrate</Label>
                </Row>
                <Row className='d-flex justify-content-center' style={{marginBottom:"40px"}}>
                  <img src="https://imgur.com/gzXMzZj.png" className='img-fluid' alt="Responsive image" style={{width:"20%"}}/>
                </Row>
                <Row className="justify-content-center" style={{marginBottom:"40px"}}>
                  <Input type="text" className='form-control form-rounded' placeholder='☺  Nombre...' style={{borderRadius: "20px", paddingLeft: "30px", paddingRight: "30px", fontSize: "14px", marginBottom: "15px"}}></Input>
                  <Input type="text" className='form-control form-rounded' placeholder='✎  Apellido...' style={{borderRadius: "20px", paddingLeft: "30px", paddingRight: "30px", fontSize: "14px", marginBottom: "15px"}}></Input>
                  <Input type="text" className='form-control form-rounded' placeholder='✉  Correo...' style={{borderRadius: "20px", paddingLeft: "30px", paddingRight: "30px", fontSize: "14px", marginBottom: "15px"}}></Input>
                </Row>
                <Row className="justify-content-center" >
                  <Link to={"/"}>
                    <Button color="warning" size="lg" outline style={{borderRadius: "20px", width:"80%", fontSize: "14px" }}>
                      Comenzar
                    </Button>
                  </Link>
                  <Label style={{marginTop:"5px", fontSize:"12px"}}>
                    ¿Ya tienes cuenta?
                    <Link style={{color:"#C3B029"}} to={"/login"}> Inicia sesión</Link>
                  </Label>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Row className='d-flex justify-content-center'>
            <Col>
              <Label style={{color:"white"}}>
                © 2022
                <Link style={{color:"#C3B029"}} to={"/landing"}> Dogect</Link>
                , Inc.
              </Label>

            </Col>
          </Row>
      </div>
    )
  }

  componentDidMount() {}
}

export default SignupPage;
