import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, makeStyles, Badge, Tooltip, Avatar, Menu, MenuItem, Link } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import useAuth from './../../../auth/UseAuth';
import { Navigate } from 'react-router-dom';

import "./navStyles.css"

const settingsStrings = ['Mis manadas', 'Cerrar sesión'];

export default function Navbarl() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { logout } = useAuth();

  const logoutOtro = () => {
    logout();
    handleCloseUserMenu();
  }

  const { user } = useAuth();

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
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.img??"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}  style={{marginRight:"10px", height:"25px", width:"25px"}}/>
                    <Typography variant="h6" color="textPrimary" component="div" sx={{ flexGrow: 1 }}>
                    {user?.name??"Guest"}
                  </Typography>
                  </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={logoutOtro}>Cerrar sesion</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>Mi cuenta</MenuItem>
              </Menu>
            </Box>


          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <NotificationsNoneIcon fontSize='medium' style={{color:"grey", marginLeft:"10px"}}/>
            </Badge>
          </IconButton>
          <div className='divBtnNav'>
            <Link href="/login">
              <Button color="inherit" style={{color:"black", marginLeft:"10px"}}>Inicia sesión</Button>
            </Link>
            <Link href="/signup">
              <Button color="inherit" style={{color:"black", border:"1px solid #ffc30f", marginLeft:"10px"}}>Regístrate</Button>
            </Link>
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
