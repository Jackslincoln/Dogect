// import { response } from 'express';
import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Manada } from './manada';

export class ManadaList extends React.Component {
  constructor() {
    super();
    this.state = {
      // status:false,
      // manadas: []
    };
  }

  render() {
    return (
      <></>
      // <Container>
      //   <Row>
      //     {this.state.manadas.map((manada, index) => (
      //       <Col key={index} md={6}>
      //         <Manada
      //           key={index}
      //           id={manada._id}
      //           callbackMessage={() => this.props.callbackMessage}
      //           status={this.state.status}
      //           data={manada}
      //         />
      //       </Col>
      //     ))}
      //   </Row>
      // </Container>
    )
  }

  componentDidMount() {
    this.setState({

    });
    // fetch('http://localhost:8080/api/v1/manadas/')
    // .then((response) => response.json())
    // .then((respJson) => {
    //   if (respJson.success) {
    //     this.setState({
    //       status:true,
    //       manadas: respJson.Data,
    //     });
    //     this.forceUpdate();
    //   }
    // });
  }
}
