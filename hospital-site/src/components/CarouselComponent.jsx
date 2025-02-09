// Done by Ethan Lim
"use client";

import React from 'react';
import Slider from 'react-slick';  // Importing the Slider component from react-slick for carousel functionality
import 'slick-carousel/slick/slick.css';  // Importing the default styles for the carousel
import 'slick-carousel/slick/slick-theme.css';  // Importing the theme styles for the carousel

const CarouselComponent = ({ testimonials }) => {
  // Carousel settings including enabling dots, infinite scrolling, autoplay, and other options
  const settings = {
    dots: true,  // Shows navigation dots below the carousel
    infinite: true,  // Infinite looping of slides
    speed: 500,  // Speed of slide transition in ms
    slidesToShow: 1,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll on each transition
    autoplay: true,  // Automatically moves to the next slide
    autoplaySpeed: 3000,  // Time delay between each slide in ms
  };

  return (
    <Slider {...settings}>  {/* Passing settings to Slider component */}
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-item text-center" key={index}>
          {/* Testimonial item container with text-center alignment */}
          <div className="position-relative mb-5">
            {/* Container for the image with relative positioning to center the quote */}
            <img className="img-fluid rounded-circle mx-auto" src={testimonial.img} alt={testimonial.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            {/* Displaying the testimonial image in a circular shape */}
            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
              {/* Quote icon styled as a circle with a background */}
              <i className="fa fa-quote-left fa-2x text-primary"></i>  {/* FontAwesome quote icon */}
            </div>
          </div>
          <p className="fs-4 fw-normal">{testimonial.text}</p>  {/* Testimonial text */}
          <hr className="w-25 mx-auto" />  {/* Horizontal rule separating text from name */}
          <h3>{testimonial.name}</h3>  {/* Name of the person giving the testimonial */}
          <h6 className="fw-normal text-primary mb-3">{testimonial.role}</h6>  {/* Role of the person */}
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
