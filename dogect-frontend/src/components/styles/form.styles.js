import styled from 'styled-components';
import { Label } from 'reactstrap';

export const ContenedorFormulario = styled.div`
  min-width: 600px;
	background: #fff;
	padding-left: 60px;
	padding-right: 60px;
  div {
	  margin-bottom: 20px;
  }
  Label {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px;
    align-items: left;
    color: #9C9C9C;
  }
  input {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    border-radius: 60px;
    border: 2px solid #e2e2e2;
    font-size: 14px;
    padding: 10px 30px;
    margin-bottom: 5px;
    color: #1f1f1f;
  }
    input:focus {
    outline: none;
  }
  Button[type="submit"] {
    display: block;
    background: #0085FF;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: .3s ease all;
  }
`;


