import React from 'react'
import './Card.css'
import { Row, Col, Container, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Card({ src, title, creatorImg, creator, numUsers}) {
  return (
    <Link to={'/equipo'} style={{textDecoration:"none"}}>
      <div className='card'>
        <img class="card-img-top img-fluid" src={src} alt="Card image cap Responsive image"/>
        <div className='card_body'>
          <Container>
            <Row>
              <CardTitle className='card_title'>{title}</CardTitle>
            </Row>
            <Row>
              <Col md={2}>
                <img src={creatorImg} class="card_creatorImg img-fluid" alt="Responsive image"/>
              </Col>
              <Col md={9}>
                <p>{creator}</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <h4>{numUsers}</h4>
              </Col>
              <Col md={9}>
                <h2>Miembros</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Link>
  )
}

export default Card
