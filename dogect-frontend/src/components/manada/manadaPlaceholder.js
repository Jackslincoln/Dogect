import React from 'react';
import styled from 'styled-components';

const ContainerPlaceHolder = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 50px;
  background-color: hsl(218, 17%, 62%);
  `;

  const ContentPlaceHolder = styled.b`
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 10px;
    color: hsl(90, 1%, 31%);
  `;

export const Placeholder = () =>  {
  return (
    <></>
    // <ContainerPlaceHolder>
    //   <ContentPlaceHolder>CARGANDO...</ContentPlaceHolder>
    // </ContainerPlaceHolder>
  )
}

