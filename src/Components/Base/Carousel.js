import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>IMAGEN 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>IMAGEN 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>IMAGEN 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>IMAGEN 4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;