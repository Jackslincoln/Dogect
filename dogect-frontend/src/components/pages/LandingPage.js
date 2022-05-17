import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faCalendarCheck, faPencilAlt, faPencil } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Label, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div>
        {/*--- BANNER ----*/}
        <div style={{position:"relative", textAlign:"center", marginBottom:"90px"}}>
          <img src="https://imgur.com/9R9q1yf.jpg" style={{objectFit:"cover", maxHeight:"800px", width:"100%"}}/>
          <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontWeight:"bold", fontSize:"75px", color:"white"}}>
            Dogect
            <div style={{fontSize:"20px", color:"white"}}> Descubre la nueva forma de planificar tus proyectos.</div>
            <Link to={"/signup"}>
              <Button color='warning' style={{paddingLeft:"30px", paddingRight:"30px", borderRadius: "20px"}}>
                Únete - ¡Es grátis!
              </Button>
            </Link>
          </div>
        </div>
        {/*--- TODO LO DEMAS ---*/}
        <Container>
          <Row style={{marginBottom:"80px"}}>
            <Label style={{fontWeight:"bold", fontSize:"40px"}}>Trabaja en equipo sin morir en el intento</Label>
            <p style={{textAlign:"center", fontSize:"18px"}}>Crea, conecta, crece. Utiliza layouts costumizables y trabaja con <br/> tu equipo de manera organizada.</p>
          </Row>

          <Row style={{paddingLeft:"150px", paddingRight:"150px"}}>
            <Col md={4} style={{justifyContent:"center"}}>
            <FontAwesomeIcon icon={faUserGroup} className="fa-2xl" style={{color:"hsl(29, 83%, 50%)"}}/> <br/>
            <Label style={{fontSize:"22px", marginTop:"10px"}}>Crea grupos</Label>
            <p>Varios pueden trabajar en algo <br/> diferente, no todos tienen que <br/> centrarse en lo mismo.</p>
            </Col>
            <Col md={4} style={{justifyContent:"center"}}>
              <FontAwesomeIcon icon={faCalendarCheck} className="fa-2xl" style={{color:"hsl(29, 83%, 50%)"}}/> <br/>
              <Label style={{fontSize:"22px", marginTop:"10px"}}>Analiza el proceso</Label>
              <p>Añade fechas a las tareas ¡nunca <br/> sucumbirás al monstruo de la <br/> procrastinación!</p>
            </Col>
            <Col md={4} style={{justifyContent:"center"}}>
              <FontAwesomeIcon icon={faPencil} className="fa-2xl" style={{color:"hsl(29, 83%, 50%)"}}/> <br/>
              <Label style={{fontSize:"22px", marginTop:"10px"}}>Crea notas</Label>
              <p>No volverás a perderte en <br/> instrucciones que no recuerdas.</p>
            </Col>
          </Row>

          <div style={{position:"relative", textAlign:"center", marginBottom:"90px", marginTop:"90px"}}>
            <img src="https://imgur.com/uSaJ8Eq.jpg" style={{objectFit:"cover", maxHeight:"800px", width:"100%"}}/>
            <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:"35px", color:"white"}}>
              Conoce al equipo
              <div style={{fontSize:"15px", color:"white", fontWeight:"normal", marginTop:"10px", marginBottom:"20px"}}> Un equipo pequeño, pero con un gran corazón. Conocemos la complicada <br/> travesía de trabajar en un proyecto con muchas personas, por eso <br/> queremos encargarnos de hacer el proceso más sencillo para tí.</div>
              <Container style={{marginTop:"90px"}}>
                <Row >
                  <Col md={6}>
                    <Card style={{boxShadow:"0 10px 16px 0 rgba(0,0,0,0.2)", padding:"10px"}}>
                      <CardBody>
                        <img class="img-fluid rounded-circle w-50 " src="https://imgur.com/BtPv6Qk.jpg" alt="Card image cap" style={{borderRadius:"300px", boxShadow:"0 5px 8px 0 rgba(0,0,0,0.2)"}}/>
                        <h3 style={{color:"black", fontSize:"20px", marginTop:"30px", marginBottom:"-20px"}}>Omar Dávila</h3>
                        <Label style={{textAllign:"center", color:"#F96332", fontSize:"16px"}}>Programador</Label>
                        <p style={{color:"#666666", fontSize:"14px", textAllign:"center", marginTop:"20px",  marginBottom:"60px"}}>"¡Espera, no somos cabernícolas! <br/> Tenemos tecnología..."</p>
                      </CardBody>
                    </Card>

                  </Col>
                  <Col md={6}>
                  <Card style={{boxShadow:"0 10px 16px 0 rgba(0,0,0,0.2)", padding:"10px"}}>
                      <CardBody>
                        <img class="img-fluid rounded-circle w-50 " src="https://imgur.com/klLMN2Q.jpg" alt="Card image cap" style={{borderRadius:"300px", boxShadow:"0 5px 8px 0 rgba(0,0,0,0.2)"}}/>
                        <h3 style={{color:"black", fontSize:"20px", marginTop:"30px", marginBottom:"-20px"}}>Alessandra Muñoz</h3>
                        <Label style={{textAllign:"center", color:"#F96332", fontSize:"16px"}}>Diseñadora</Label>
                        <p style={{color:"#666666", fontSize:"14px", textAllign:"center", marginTop:"20px"}}>
                          "Primero: no soy su amigo.<br/>
                          Segundo: quién es usted.<br/>
                          Tercero: qué le importa."
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>

        {/*--- FOOTER ---*/}
        <Row className='d-flex justify-content-center'>
            <Col>
              <Label>
                © 2022
                <Link style={{color:"#C3B029"}} to={"/landing"}> Dogect</Link>
                , Inc.
              </Label>

            </Col>
          </Row>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default LandingPage;
