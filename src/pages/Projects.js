import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Card, CardMedia, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import portfolioData from '../utils/portfolioData.json';
import { keyframes } from '@mui/system';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setProjects(portfolioData.projects);
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <Container maxWidth={false} disableGutters sx={{ textAlign: 'center', padding: 4, backgroundColor: '#202020' }}>
      <Typography variant="h4" component="div" color="#8689cd" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="h5" component="div" color="#ffffff" gutterBottom>
        Digital Product Showcase
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}>
        {['All', 'Landing Page', 'App Design', 'Web Design'].map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'contained' : 'outlined'}
            color="primary"
            sx={{
              mx: 1,
              backgroundColor: filter === category ? '#8689cd' : 'transparent',
              color: filter === category ? '#000' : '#8689cd',
              borderColor: '#8689cd',
              '&:hover': {
                backgroundColor: '#8689cd',
              },
            }}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

  
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          padding: 4,
        }}
      >
        {filteredProjects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '48%', md: '30%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
              animation: `${zoomIn} 0.3s ease-in-out`,
              '&:hover': {
                animation: `${zoomIn} 0.5s ease-in-out`,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <Card sx={{
              width: '100%',
              backgroundColor: '#1c1c1e',
              color: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '2px solid gray',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}>
              <CardMedia
                component="img"
                height="250"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" color="#ffffff">
                  {project.title}
                </Typography>
                <Accordion sx={{ backgroundColor: '#1c1c1e', boxShadow: 'none', color: '#fff', borderRadius: '0px' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#FF3D00' }} />}
                    aria-controls={`panel-content-${index}`}
                    id={`panel-header-${index}`}
                    sx={{ padding: 0 }}
                  >
                    <Typography variant="body2" color="#ffffff">
                      View Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="#b0b0b0">
                      {project.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
