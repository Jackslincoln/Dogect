import React from 'react';
import styled from 'styled-components';

<link href="//db.onlinewebfonts.com/c/05e476e067ffef74ca5686f229c40a63?family=PingFang+SC" rel="stylesheet" type="text/css"/>

export const Ulx = styled.div`
    
    top:0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    height:auto;
`;

export const Body = styled.div`
    background-image: url("https://i.imgur.com/Uq0iB4d.jpeg");
    max-width: 100%;
    height: auto;
`;

export const Img = styled.img`
    display: block;
    width:11%;
    height:auto;
    background-color: none;
    margin-left: 120px;
    
`;

export const Lix = styled.div`
    float: left;
    width: auto;
    height: auto;
    

`;
export const Lix2 = styled.div`
    float: right;
    width: auto;
    height: auto;
    
`;
  
export const A = styled.label`
    float: left;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover ${A}{
        background-color: #111;
        color: white;
    }
`;
  
export const A2 = styled.label`
    float: right;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    background-color:none;

    &:hover ${A2}{
        background-color: #111;
        color: white;
    }
`

export const Divbuttons = styled.div`
    margin-right: 120px;
    display:flex;
    width:auto;
`

export const Button1 = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    display: inline;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: auto;
    cursor: pointer;
    outline: inherit;
    padding: 10px;
    margin: 5px;
    border-radius: 20px;
    border: none;
    color: black;
    background-color: white;

    &:hover ${Button1}{
        color: #ffc30f;
    }

`

export const Button2 = styled.button`
    font-family: Arial, Helvetica, sans-serif;
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
 
    color: #ffc30f;
    background-color: white;

    &:hover ${Button2}{
        background-color: #ffc30f;
        color: white;
    }

`