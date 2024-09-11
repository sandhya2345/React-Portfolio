import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <Container maxWidth="lg"  sx={{ backgroundColor: '#202020', padding: '50px' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4, marginBottom: 4, fontFamily:'Poppins' }}>
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3 }}>
           Hi there, Looking forword to work with you!
          </Typography>
          <Typography variant="body1" sx={{ color: 'gray', mb: 4 }}>
          I’m eager to work with dedicated individuals and teams. I approach every project with full attention and a strong desire to learn and grow. Together, we can create something meaningful and impactful.
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}>
            📧 sandhyatimalsena29@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', mb: 3 }}>
            📞 +977-9811078292
          </Typography>
          

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<FaLinkedin />} 
              sx={{ backgroundColor: '#0072b1', color: '#fff', textTransform: 'none' }}
              href="https://www.linkedin.com/in/sandhya-timalsena-4077622a3/" 
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button 
              variant="contained" 
              startIcon={<FaGithub />} 
              sx={{ backgroundColor: '#333', color: '#fff', textTransform: 'none' }}
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
            />
            <Box sx={{ display: 'flex', gap: 2}}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Phone number"
                variant="outlined"
                fullWidth
              />
            </Box>
            <TextField
              label="Tell us about your project or enquiry"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button variant="contained" color="#202020" sx={{ padding: '12px', backgroundColor: '#ffffff', textTransform: 'none' }}>
              Submit Enquiry
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
