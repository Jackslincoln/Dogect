import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Row, Col, Label } from 'reactstrap';

function Footer() {
  return (
    <div className='footer'>
      <p>
        © 2022
        <a href='/login' style={{color:"#C3B029"}}> Dogect</a>
        , Inc.
      </p>
    </div>
  )
}

export default Footer
