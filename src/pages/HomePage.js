import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <Container>
        <Card>
          <Card.Img src="https://imgur.com/YKoHo5U.jpg" alt="Card Image"/>
        </Card>
      </Container>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

