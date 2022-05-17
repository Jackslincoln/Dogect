import React from 'react';
import styled from 'styled-components';
<link href="//db.onlinewebfonts.com/c/05e476e067ffef74ca5686f229c40a63?family=PingFang+SC" rel="stylesheet" type="text/css"/>


export const Containerr = styled.div`
    display: grid;
    height: 100vh;
    color: white;

    grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas:
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
    text-align: center;
    grid-gap: 0.25rem;
`

export const Sidebarr = styled.div`
  background: #212121;
  width: 20%;
  height:100%;
  position:fixed;
  overflow: auto;
  padding: 0.25rem;

`;

export const Star = styled.div`
    justify-content: center;
    margin-top:15px;
    align-items: center;
    display:flex;
    color: yellow;
`
export const Top3 = styled.div`
    margin-left:10px;
    margin-right:10px;
    color:white;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    width: auto;
`

export const Top = styled.div`
    background-color:#636363;
    border-radius: 10px;
    margin: 10px;
    display:flex;
`
export const Top2 = styled.div`
    border-radius: 10px;
    margin: 5px;
    display:flex;
`
export const Numero = styled.div`
    width: 15%;
    color: #b5b0b0;
    font-family:Arial, Helvetica, sans-serif;
    font-size:30px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left: 15px;
    padding-right: 15px;
`
export const Perfil3 = styled.div`
    padding-top:5px;
    padding-bottom:5px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 5px;
    width:20%;
    border-radius:50%;
    background-size: cover;
    background-image: url(${props => props.img});    
    
`
export const Perfil2 = styled.div`
    padding-top:5px;
    padding-bottom:5px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 5px;
    width:10%;
    height:30px;
    border-radius:50%;
    background-size: cover;
    background-image: url(${props => props.img});    
    
`

export const NameHueso = styled.div`
    padding-left: 5px;
    padding-top: 3px;
    width: 60%;
    display: block;
    text-align:left;
    
`

export const NameHueso2 = styled.div`
    padding-left: 5px;
    padding-top: 3px;
    width: 80%;
    display: block;
    text-align:left;
    
`

export const NameSide = styled.div`
    font-size:14px;
`
export const NameSide2 = styled.div`
    font-size:12px;
    color: #858585;
`
export const Rango = styled.div`
    font-size:10px;
    color: #c9c9c9;
`

export const Huesos = styled.div`
    float:left;
    font-size:12px;
    display:flex;
    width:10px;
    color: white;
    
`

export const Huesos2 = styled.div`
    float:left;
    font-size:8px;
    display:flex;
    width:10px;
    color: white;
    
`

export const Huesito = styled.div`
    padding: 3px;
`

export const Huesito2 = styled.div`
    padding: 2px;
`

export const Dropdownn = styled.div`
  position: relative;
  display: inline-block;

  &:hover{
    display: block;
  }
`

export const Buttondrop = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
export const Dropcontent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

export const Contentdropped = styled(Dropcontent)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`

export const AreaMenu = styled.div`
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}



.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }

}


.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
`

export const Separador = styled.div`
  margin: 20px;
  font-size: 16px;
  text-align: center;
  color: #7d7d7d;
`






