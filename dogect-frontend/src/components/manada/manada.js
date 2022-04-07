import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardImg, CardTitle, Container, Row, Col } from 'reactstrap';
import { FormManada } from './formManada';
import { ManadaDetail } from './manadaDetail';
import { Link } from 'react-router-dom';
import { Placeholder } from "./manadaPlaceholder"

const TYPESHOW = "show";
const TYPEEDIT = "edit";
const TYPEDELETE = "delete";

export class Manada extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        status: false,
        type: TYPESHOW,
        prevType: TYPESHOW,
        data: {},
        fakeData: null
    };
  }

  async componentDidMount() {
    // if (this.props.data) {
    //   this.setState({
    //     status:true,
    //     data: this.props.data
    //   });
    //   this.forceUpdate();
    // }
    // else if (this.props.id) {
    //   const response = await fetch(
    //     'http://localhost:3000/api/v1/manadas/${this.props.id}'
    //   );
    //   const respJson = await response.json();
    //   if(respJson.success) {
    //     this.setState({
    //       status: true,
    //       data: respJson.Data,
    //     });
    //     this.forceUpdate();
    //   }
    // }
  }

  render() {
    const isEdit = this.state.type === TYPEEDIT;
    const isShow = this.state.type === TYPESHOW;

    // return this.state.status === true ? (
    return (
      <Link to={"/equipo"} style={{textDecoration:"none"}}>
        <Card className='card shadow-sm hover-overlay' data-mdb-ripple-color="light" style={{margin: "20px", borderRadius: "20px"}}>
          <img class="card-img-top img-fluid" src="https://imgur.com/NisoA1O.jpg" alt="Card image cap Responsive image"/>
          <CardBody>
            <Container>
              <Row>
                <CardTitle style={{fontWeight: "bold", textAlign:"left", fontSize:"20px", color:"#646464"}}>Insolaris☼</CardTitle>
              </Row>
              <Row>
                <Col md={2}>
                  <img src="https://imgur.com/UU2uLQF.png" class="img-fluid" alt="Responsive image" style={{height: "50%"}} />
                </Col>
                <Col md={9} style={{fontSize: "12px"}}>
                  <p style={{color: "#949494", textAlign: "left"}}>Creador</p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {isEdit ? (
                    <FormManada ></FormManada>
                  ) : isShow ? (
                    <ManadaDetail></ManadaDetail>
                  ) : (<div></div>
                  )}
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Link>
    )
    //  : this.state.type === TYPEDELETE ? (
    //   <div></div>
    // ) : (
    //   <Placeholder></Placeholder>
    // )
  }
}
