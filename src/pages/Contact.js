import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, TextField, Button, keyframes } from '@mui/material';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'; 
import { IoMdMail } from "react-icons/io";
import portfolioData from '../utils/portfolioData.json'
import { Opacity } from '@mui/icons-material';

const Contact = () => {

  const[data,setData]= useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() =>{
    setData(portfolioData.contact);
    setIsVisible(true);
  }, []);

  if (!data) return null;


  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <Container maxWidth="lg"  sx={{ backgroundColor: '#202020', padding: '50px',  }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4, marginBottom: 4, fontFamily:'Poppins',  animation: `${fadeInUp} 1.5s ease-out`,  
              animationDelay: isVisible ? '0s' : '0s',
              animationFillMode: 'forwards' }}>
        
        <Box sx={{ flex: 1}}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3,    }}>
           {data.intro}
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 4, fontFamily:'Poppins', }}>
            {data.desc}
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', mb: 1 , fontFamily: 'Poppins',}}>
          <IoMdMail /> {data.email}
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', mb: 3, fontFamily:'Poppins' ,  }}>
            <FaPhone/> {data.phone}
          </Typography>
          

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<FaLinkedin />} 
              sx={{ backgroundColor: '#0072b1', color: '#fff', textTransform: 'none',   }}
              href="https://www.linkedin.com/in/sandhya-timalsena-4077622a3/" 
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button 
              variant="contained"
              startIcon={<FaGithub />} 
              sx={{ backgroundColor: '#333', color: '#fff', textTransform: 'none',  }}
              href="https://github.com/sandhya2345" 
              target="_blank"
            >
              GitHub
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
              />
              <TextField
                label="Phone number"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: '#fff' } }}
                InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
              />
            </Box>
            <TextField
              label="Tell us about your project or enquiry"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { backgroundColor: '#8689cd', color: '#fff' } }}
            />
            <Button variant="contained" sx={{ padding: '12px', backgroundColor: '#8689cd', color: '#fff', textTransform: 'none' }}>
              Submit Enquiry
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
