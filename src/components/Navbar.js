import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <AppBar 
        position="static" 
        color="transparent" 
        elevation={0} 
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}
      >
        <Toolbar style={{ display: 'flex', width: '100%', maxWidth: 1200, alignItems: 'center', justifyContent: 'center' }}>
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleNavbar} 
            style={{ position: 'absolute', right: 16 }}
          >
            <MenuIcon style={{fontSize:'32px'}} />
          </IconButton>
          <div 
            style={{
              display: isNavVisible ? 'flex' : 'none',
              width: '100%',
              justifyContent: 'center',
              transition: 'opacity 0.5s ease-out',
              gap:'6rem',
            }}
          >
            <Button variant='text' color="inherit" component={Link} to="/" style={{ fontSize: '16px', color: '#ffffff' }}>Home</Button>
            <Button color="inherit" component={Link} to="/about" style={{ fontSize: '16px', color: '#ffffff' }}>About</Button>
            <Button color="inherit" component={Link} to="/projects" style={{ fontSize: '16px', color: '#ffffff' }}>Projects</Button>
            <Button color="inherit" component={Link} to="/contact" style={{ fontSize: '16px', color: '#ffffff' }}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
