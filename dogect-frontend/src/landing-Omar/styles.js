import React from 'react';
import styled from 'styled-components';

export const Fondo = styled.div`
    position: fixed;
    background-size: cover;
    left:0;
    background-image: url(${props => props.img});
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Centro = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    justify-content: center;
    display:block;
    align-items: center;
    text-align:center;

    margin: 0 auto;
    

    width: 500px;
    height: 200px;

`;

export const Title = styled.div`
    font-size: 60px;
    text-shadow: 0 0 8px black;
`;
export const Subtitle = styled.div`
    text-shadow: 0 0 8px black;
    font-size: 16px;
    margin-bottom:10px;
`;

export const Button2 = styled.button`
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    display: inline;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: auto;
    cursor: pointer;
    outline: inherit;
    padding: 10px;
    margin: 5px;
    border-radius: 15px;
    border: 1px solid #ffc30f;
    border-color:#ffc30f;
 
    color: white;
    text-shadow: 0 0 8px black;
    background-color: #ffc30f;



`

export const Hovers = styled.div`
    &:hover ${Button2}{
        background-color: #ffc30f;
        color: white;
    }
`