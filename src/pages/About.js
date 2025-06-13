import { Container, Box, Typography, Slider, Rating, Divider, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import portfolioData from '../utils/portfolioData.json'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { keyframes } from '@mui/system';
import { FaHtml5, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiDjango, SiExpress, } from 'react-icons/si';

const animatedBox = keyframes`
  0% {
    width: 100px;
    height: 50px;
    opacity: 0;
  }
  100% {
    width: 350px;
    height: 60%;
    opacity: 1;
  }
`;


const About = () => {

  const [data, setData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleSliderChange = (event, newValue, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].proficiency = newValue;
    setSkills(updatedSkills);
  };

  const handleRatingChange = (event, newValue, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].proficiency = newValue * 20;
    setSkills(updatedSkills);
  };


  useEffect(() => {
    setData(portfolioData.about);
    setSkills(portfolioData.skills);
    setIsVisible(true);
  }, []);

  if (!data) return null;


  return (
    <Container maxWidth={false} disableGutters={true} sx={{ padding: 0, margin: 0, width: '100vw', height: '100vh' }}>

      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          height: { xs: '90vh', md: '90vh' },
          padding: { xs: 2, md: 12 },
        }}
      >

        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: 0, md: 2 },
            textAlign: { md: 'left' },
            marginTop: { xs: '-10px', md: '-50px' },
          }}
        >
          <Typography
            variant="h1"
            color="#8689cd"
            sx={{
              fontSize: { md: '6rem', marginBottom: '15px'},
            }}
          >
            {data.title}
          </Typography>

          <Box component="section" sx={{ marginRight: { xs: 0, md: 10 } }}>
            <Typography
              variant="h6"
              color="#DDDDDD"
              marginBottom={10}
              fontFamily="Poppins"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              {data.content}
            </Typography>
          </Box>
        </Box>


        <Box
          sx={{
            width: isVisible ? '400px' : '100px',
            height: isVisible ? '70%' : '50px',
            backgroundColor: '#000',
            borderRadius: '8px',
            display: {xs:'none', md:'flex'},
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
            boxShadow: '12px 12px  12px #8689cd',
            animation: `${animatedBox} 1.5s ease-out forwards`,
            padding: 2,
            gap: 2,
          }}
        >
          <FaHtml5 size={40} color="#E34F26" />
          <FaReact size={40} color="#61DBFB" />
          <SiDjango size={40} color="#092E20" />
          <FaNodeJs size={40} color="#3C873A" />
          <SiExpress size={40} color="#000000" />

        </Box>
      </Box>

      {/* <Box
        component="section"
        sx={{
          width: '100%',
          height: '80vh',
          backgroundColor: '#8689cd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: { xs: '20px', sm: '40px', md: '90px' },
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            marginBottom: { xs: '16px', sm: '24px', md: '36px' },
            fontFamily: 'Poppins',
            fontSize: { xs: '24px', sm: '32px', md: '40px' },
          }}
        >
          Technical Skills
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            gap: '24px',
            justifyContent: 'left',
            marginBottom: '24px',
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            {skills.map((skill, index) => (
              <Box
                key={skill.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  paddingRight: '20px',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    width: '20%',
                    paddingRight: { xs: '20px', sm: '30px', md: '50px' },
                  }}
                >
                  {skill.name}
                </Typography>

                <Slider
                  value={skill.proficiency}
                  min={0}
                  max={100}
                  step={1}
                  sx={{ width: { xs: '50%', md: '60%'}, marginLeft: '16px',  }}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => handleSliderChange(event, newValue, index)}
                />

                <Rating
                  value={Math.round(skill.proficiency / 20)}
                  onChange={(event, newValue) => handleRatingChange(event, newValue, index)}
                  max={5}
                  precision={0.5}
                  sx={{ marginLeft: '16px' }}
                />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(auto-fit, minmax(140px, 1fr))' },
              gap: '24px',
              width: { xs: '100%', md: '45%' },
            }}
          >
            {[
              { icon: <FaHtml5 size={40} color="#E34F26" />, label: 'HTML' },
              { icon: <SiDjango size={40} color="#092E20" />, label: 'Django' },
              { icon: <FaReact size={40} color="#61DBFB" />, label: 'React' },
              { icon: <FaJava size={40} color="#3C873A" />, label: 'Java' },

            ].map((tech) => (
              <Box
                key={tech.label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {tech.icon}
                <Typography variant="h6" sx={{ color: '#EAEAEA', marginTop: '8px' }}>
                  {tech.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box> */}




      {/* this box starts here */}

      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "80vh",
          padding: 6,
          paddingLeft: 12,
          justifyContent: "center",
          fontFamily: 'Poppins',
          marginBottom: { xs: '16px', sm: '24px', md:'-20px' },
          padding: { xs: '20px', sm: '40px', md: '80px' },
        }}
      >
        <Typography variant="h4" fontFamily='Poppins' sx={{ marginBottom: 4, }}>
          Education Background
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 6 }}
        >

          <Box sx={{ width: "50%" }}>
            <Typography variant="h5" fontFamily="Poppins" marginBottom={2} >
              Higher Secondary Education:
              <Divider style={{ backgroundColor: "white", width: "70%" }} />
            </Typography>

            <Timeline position="right">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, color: "#ffffff" }}
                >
                  2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography color="B6BBC4">Delhi Public School</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, color: "#ffffff" }}
                >
                  Location
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography color="B6BBC4">Dharan, Nepal</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>


          <Box sx={{ width: "50%" }}>
            <Typography variant="h5" fontFamily='Poppins' marginBottom={2}>
              BSc(Hons) Computing:
              <Divider style={{ backgroundColor: "white", width: "50%" }} />
            </Typography>

            <Timeline position="right">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, color: "#ffffff" }}
                >
                  2022 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>Itahari International College</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, color: "#ffffff" }}
                >
                  Location
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>SundarHaraicha, Nepal</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, color: "#ffffff" }}
                >
                  Affiliated
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>London Metropoliton University</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>


      {/* and its ends here  */}

      <Box
        component="section"
        sx={{
          width: '100%',
          height: { xs: 'auto', md: '80vh' },
         
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 4,
          margin: 0,
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: '20px', sm: '40px', md: '60px' },
        
        }}
      >

        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: {md:'flex', xs:'none'},
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '4',
          }}
        >
          <img
            src="/public/assets/Women.png"
            alt="Woman posing"
            style={{
              width: '60%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>



        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: '#ffffff',
            paddingLeft: { xs: 0, md: 4 },
            marginRight: { xs: 0, md: 16 }, 
          }}
        >
          <Typography variant='h4' marginBottom={4} fontFamily='Poppins'>Designing Solutions, Not <br /> Just Visuals</Typography>

          <Box
            sx={{
              backgroundColor: '#FFEEAD',
              padding: 2,
              paddingRight: 4,
              borderRadius: 2,
              marginBottom: 3,
            }}
          >
            <Typography variant="body1" sx={{ color: '#000000', fontFamily: 'Poppins' }}>
              {data.title2}
              <br />
            {data.content2}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: '#F5F7F8',
              padding: 2,
              borderRadius: 2,
              marginBottom: 3,
            }}
          >
            <Typography variant="body1" sx={{ color: '#000000', fontFamily: 'Poppins' }}>
              {data.title3}
              <br />
             {data.content3}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD35A',
              color: '#000',
              padding: '10px 20px',

            }}
            href="/assets/SandhyaTimalsena.pdf"
            download="SandhyaTimalsena.pdf"
          >
            Download CV
          </Button>
        </Box>
      </Box>

    </Container>
  )
}

export default About