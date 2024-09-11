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
import { FaHtml5, FaReact, FaNodeJs, FaJava} from 'react-icons/fa';
import { SiDjango, SiExpress, } from 'react-icons/si';

const growAnimation = keyframes`
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

      <Box component="section" sx={{
        display: 'flex',
        width: '100%',
        height: '90vh',
        padding: 2,
        paddingLeft: 12,
        paddingRight: 12,
      }}>
        <Box sx={{
          flex: 1,
          paddingRight: 2,
        }}>
          <Typography variant='h1' marginBottom={2} color='#8689cd'>{data.title} </Typography>
          <Box component="section" sx={{ mr: 10 }}>
            <Typography variant='h6' color='#DDDDDD'>{data.content}</Typography>
          </Box>
        </Box>


        <Box
      sx={{
        width: isVisible ? '400px' : '100px',
        height: isVisible ? '70%' : '50px',
        backgroundColor: '#202020',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        boxShadow: '12px 18px 20px 12px #8689cd',
        animation: `${growAnimation} 1s ease-out forwards`, 
        padding:2,
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

      <Box
  component="section"
  sx={{
    width: '100%',
    height: '80vh',
    backgroundColor: '#8689cd', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
  }}
>
  <Typography variant="h2" sx={{ color: '#EAEAEA', marginBottom: '24px', fontWeight: 'bold', left:'%'}}>
    Technical Skills
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      gap: '24px',
      justifyContent: 'center',
      marginBottom: '24px',
    }}
  >
    <Box sx={{ width: '60%' }}>
      {skills.map((skill, index) => (
        <Box
          key={skill.name}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            width: '100%',
          }}
        >
          <Typography variant="h6" sx={{ color: '#EAEAEA', width: '20%' }}>
            {skill.name}
          </Typography>

          <Slider
            value={skill.proficiency}
            min={0}
            max={100}
            step={1}
            sx={{ width: '60%', marginLeft: '16px' }}
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '24px',
        width: '40%',
      }}
    >
      {[
        { icon: <FaHtml5 size={40} color="#E34F26" />, label: 'HTML' },
        { icon: <SiDjango size={40} color="#092E20" />, label: 'Django' },
        { icon: <FaReact size={40} color="#61DBFB" />, label: 'React' },
        { icon: <FaJava size={40} color="#3C873A" />, label: 'Java' },
        { icon: <FaJava size={40} color="#3C873A" />, label: 'Java' },
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
            backgroundColor: '#2C2C34',
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
</Box>



      {/* this box starts here */}

      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "90vh",
          padding: 6,
          paddingLeft: 12,
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 6 }}>
          Education Background
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 6 }}
        >

          <Box sx={{ width: "50%" }}>
            <Typography variant="h4" marginBottom={2}>
              Higher Secondary Education:
              <Divider style={{ backgroundColor: "white", width: "75%" }} />
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
            <Typography variant="h4" marginBottom={2}>
              BSc(Hons) Computing:
              <Divider style={{ backgroundColor: "white", width: "60%" }} />
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
          height: '80vh',
          backgroundColor: '#8689cd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 4,
          margin: 0,
        }}
      >

        <Box
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '4',
          }}
        >
          <img
            src="/assets/Women.png"
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
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: '#ffffff',
            paddingLeft: 4,
            marginRight: 16,
          }}
        >
          <Typography variant='h4' marginBottom={4}>Designing Solutions, Not <br /> Just Visuals</Typography>

          <Box
            sx={{
              backgroundColor: '#FFEEAD',
              padding: 2,
              paddingRight: 4,
              borderRadius: 2,
              marginBottom: 3,
            }}
          >
            <Typography variant="body1" sx={{ color: '#000000' }}>
              8+ Completed Projects
              <br />
              What is Lorem ipsum. Lorem ipsum is simply dummy text of the printing and typesetting industry.
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
            <Typography variant="body1" sx={{ color: '#000000' }}>
              5+ Years of Experience
              <br />
              What is Lorem ipsum. Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD35A',
              color: '#ffffff',
              padding: '10px 20px',

            }}
            href="/assets/SandhyaTimalsenaCV.pdf"
          >
            Download CV
          </Button>
        </Box>
      </Box>

    </Container>
  )
}

export default About