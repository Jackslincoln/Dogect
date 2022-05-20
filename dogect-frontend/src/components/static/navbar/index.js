import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, makeStyles, Badge } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import "./navStyles.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },

  AppBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none"
  },

  grow: {
    flexGrow: 1
  },

  Button: {
    marginLeft: theme.spacing(2)
  },

  image: {
    marginLeft: "10px"
  }
}))

export default function Navbarl() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img className='navImg' src='https://imgur.com/CZPzCt0.png'/>
          </IconButton>
          <div className='divGrowNav'/>
          <Typography variant="h6" color="textPrimary" component="div" sx={{ flexGrow: 1 }}>
            Guest
          </Typography>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <NotificationsNoneIcon fontSize='medium' style={{color:"grey", marginLeft:"10px"}}/>
            </Badge>
          </IconButton>
          <div className='divBtnNav'>
            <Button color="inherit" style={{color:"black", marginLeft:"10px"}}>Inicia sesión</Button>
            <Button color="inherit" style={{color:"black", border:"1px solid #ffc30f", marginLeft:"10px"}}>Regístrate</Button>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}









// import React from 'react';
// import {Ulx, Lix, Lix2, Img, Button1, Button2, Divbuttons} from './styles';

// //import logotipo from '/images/logotipo.png'



// export const Navbarl = (
// {
// 	//Estos son los default
// 	texto1="ENTRA",
//     texto2="REGÍSTRATE",
//     path="http://www.google.com",
//     path2="http://www.youtube.com"
// }
// ) =>
// (
//   <div>
//     <Ulx>
//       <a href='/landing'>
//       <Lix>
//           <Img src="https://i.imgur.com/CZPzCt0.png" />
//       </Lix>
//       </a>

//       <Lix2>
//         <Divbuttons>
//           <a href='/login' style={{textDecoration:"none"}}>
//             <Button1 >ENTRA</Button1>
//           </a>
//           <a href='/signup' style={{textDecoration:"none"}}>
//             <Button2  href="/signup">REGISTRATE</Button2>
//           </a>
//         </Divbuttons>
//       </Lix2>

//                 {/*--- estaba comentado de aqui ---*/}
//                 {/* Mira primero lo voy a poner asi a lo berserk
//                 <Lix2>
//                     <Divbuttons>
//                     <Button1  href={path}>{texto1}</Button1>
//                     <Button2  href={path2}>{texto2}</Button2>
//                     </Divbuttons>
//                 </Lix2> */}
//                 {/*--- hasta aqui ---*/}

//       </Ulx>
//     </div>


//     /*--- Esto tambien estaba comentado ---*/
//     //<Col><Button variant={color} href={path}><h1>{text}</h1> <FontAwesomeIcon icon = {icons[iconName]}></FontAwesomeIcon></Button></Col>
// );
