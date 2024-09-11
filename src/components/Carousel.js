import React from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';



const Sliders = styled(Slider)(({ theme }) => ({
  width: '100%', 
  height: '80vh', 
  margin: 'auto',
  marginTop: 20,
}));

const Media = styled('img')(({ theme }) => ({
  width: '50%',
  height: '50vh', 
  objectFit: 'cover', 
  overflow: 'hidden',

}));

const imagesarr = [
  {
    id: 1,
    image: '/assets/pic1.jpg', 
  },
  {
    id: 2,
    image: '/assets/pic1.jpg',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/1600x900',
  },

  {
    id: 4,
    image: 'https://via.placeholder.com/1600x900',
  },
];

const Carousel1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Sliders {...settings}>
      {imagesarr.map((item) => (
        <div key={item.id}>
          <Media src={item.image} alt={`Slide ${item.id}`} />
        </div>
      ))}
    </Sliders>
  );
}

export default Carousel1;
