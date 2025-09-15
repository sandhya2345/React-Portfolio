import { Container, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import portfolioData from '../utils/portfolioData.json';
import { keyframes } from '@mui/system';
import { FaHtml5, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiDjango, SiExpress } from 'react-icons/si';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const About = () => {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setData(portfolioData.about);
    setIsVisible(true);
  }, []);

  if (!data) return null;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 4, md: 12 },
      }}
    >

      <Box sx={{
        position: 'absolute',
        top: { xs: '0%', md: '16%' },
         left: { xs: '2%', md: '-12%' },
        width: { xs: 250, md: 300 }, 
        height: { xs: 250, md: 300 },
        background: 'radial-gradient(circle, #2d204dff 70%, transparent 100%)',
        borderRadius: '50%',
         zIndex: 0,
      }} />

       <Box sx={{
        position: 'absolute',
        top: { xs: '0%', md: '2%' },
        left: { xs: '2%', md: '6%' },
        width: { xs: 250, md: 150 }, 
        height: { xs: 250, md: 150 },
        background: 'radial-gradient(circle, #2d204dff 70%, transparent 100%)',
        borderRadius: '50%',
         zIndex: 0,
      }} />

      {/* main things start here */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          transform: 'translateY(-10%)',
        }}
      >

        <Typography
          variant="h1"
          color="#ffffff"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            marginBottom: 3,
            animation: `${fadeInUp} 1s ease-out`,
          }}
        >
          {data.title}
        </Typography>


        <Typography
          variant="body1"
          color="#cccccc"
          fontFamily="Poppins"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            marginBottom: 5,
            lineHeight: 1.8,
            animation: `${fadeInUp} 1.2s ease-out`,
          }}
        >
          {data.content}
        </Typography>

       
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            padding: 3,
            borderRadius: 3,
            animation: `${scaleIn} 1s ease-out`,
          }}
        >
          <FaHtml5 size={50} color="#E34F26" />
          <FaReact size={50} color="#61DBFB" />
          <SiDjango size={50} color="#092E20" />
          <FaNodeJs size={50} color="#3C873A" />
          <SiExpress size={50} color="#000000" />
          <FaJava size={50} color="#f89820" />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
