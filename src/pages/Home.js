import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Moon from '../pages/Moon';  
import { keyframes } from '@emotion/react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import portfolioData from '../utils/portfolioData.json'
import { IoPlanet } from "react-icons/io5";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(portfolioData.home);
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  if (!data) return null;

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease-out, transform 1s ease-out',
  };

  const createRandomStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 10 + 20; 
      const delay = Math.random() * 5; 
      stars.push({ top, left, size, duration, delay });
    }
    return stars;
  };

  const stars = createRandomStars(250); 

  const moveStar = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  100% { transform: translateY(-100px) translateX(-100px); 
`;

  const saturn = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(1000px) translateY(-250px); } 
  `;

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '0 2rem',
        maxWidth: '100%',
        margin: '0 auto',
        color: '#fff',
        position: 'relative',
        zIndex: 2,
        height: '85vh',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Canvas
        style={{
          position: 'absolute',
          top: '40%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Moon scale={[1.5, 1.5, 1.5]} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {stars.map((star, index) => (
      <Box
        key={index}
        sx={{
          position: 'absolute',
          top: `${star.top}%`,
          left: `${star.left}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
          zIndex: 0,
          animation: `${moveStar} ${star.duration}s linear infinite`,
          animationDelay: `${star.delay}s`,
        }}
      />
    ))}

      <Box
        sx={{
          ...fadeInStyle,
          position: 'relative',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          zIndex: 2,
          textAlign: 'left',
          maxWidth: {md:'600px', xs:'600px'},
          right: {md:'20%', xs:'0%'},
          mb: 10,
         
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'Poppins',
            color: '#fff',
            mb: 2,
            animation: `${fadeIn} 1s ease-out forwards`,
            animationDelay: '0.5s',
            opacity: 0,
          }}
        >
        {data.name}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: '#ccc',
            animation: `${fadeIn} 1s ease-out forwards`,
            animationDelay: '1s',
            opacity: 0,
            fontFamily:'Poppins'
          }}
        >
         {data.descriptions}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            marginTop: '1rem',
          }}
        >
          <a href="https://github.com/sandhya2345" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color="#fff" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#fff" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="#fff" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#fff" />
          </a>
        </Box>

 
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            marginTop: '0rem',
            fontSize: '2rem',
            color: '#fff',
            animation: `${saturn} 40s linear infinite`, 
          }}
        >
          <IoPlanet/>
         
        </Box>
      </Box>
      
    </Container>
  );
};

export default Home;
