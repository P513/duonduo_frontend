import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const NavBar = () => {
  const loginUser = () => {
    window.localStorage.removeItem("userID");
    window.location.href = '/login-user';
  }
  const returnHome = () => {
    window.location.href = '/';
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={style} onClick={returnHome}>
            Duo & Duo
          </Typography>
          <Button color="inherit" onClick={loginUser}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const style = {
  flexGrow: 1
}

export default NavBar;