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
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'relative', 
          fontFamily: 'Poppins, sans-serif', 
          padding: '10px 0' 
        }}
      >
        <Toolbar style={{ width: '100%', maxWidth: 1200, alignItems: 'center', justifyContent: 'center' }}>
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleNavbar} 
            style={{ position: 'absolute', right: 16 }}
          >
            <MenuIcon style={{ fontSize: '38px', color: '#ffffff' }} />
          </IconButton>

          <div 
            style={{
              display: isNavVisible ? 'flex' : 'none',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'opacity 0.5s ease-out',
              gap: '8rem',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {['Home', 'About', 'Projects', 'Contact'].map((text, i) => (
              <Button
                key={i}
                component={Link}
                to={`/${text.toLowerCase()}`}
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 500,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#90caf9'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                {text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
