"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = ({ testimonials }) => {
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
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-item text-center" key={index}>
          <div className="position-relative mb-5">
            <img className="img-fluid rounded-circle mx-auto" src={testimonial.img} alt={testimonial.name} />
            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
              <i className="fa fa-quote-left fa-2x text-primary"></i>
            </div>
          </div>
          <p className="fs-4 fw-normal">{testimonial.text}</p>
          <hr className="w-25 mx-auto" />
          <h3>{testimonial.name}</h3>
          <h6 className="fw-normal text-primary mb-3">{testimonial.role}</h6>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponent;