import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import CarouselComponent from '../../components/CarouselComponent';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ethan",
      role: "Student",
      text: "Recovered just in time for my exams! Really thankful for all the care and attention I've received by the staff.",
      img: "/testimonial-1.jpg"
    },
    {
      name: "Damien",
      role: "Artist",
      text: "Warded for 3 days and the care was excellent. Yes, there's a long waiting time for a ward, but the nurses provided the same care everywhere. Couldn't be more pleased with the healthcare I received.",
      img: "/testimonial-2.jpg"
    },
    {
      name: "Wong Kai Ze",
      role: "Lecturer",
      text: "I have only been met with warmth, kindness and patience from the point I passed my referral letter to the registration counter, to the doctor's consultation, to medicine collection and payment.",
      img: "/testimonial-3.jpg"
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>KYS General Hospital - Testimonials</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Medical Blog, Health, Wellness" name="keywords" />
        <meta content="Stay updated with the latest health tips, medical news, and wellness advice." name="description" />
        <link href="/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
      </Head>
      <Header />
      <div className="container-fluid py-5">
        <div className="container text-center">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
            <h1 className="display-4">What Patients Say About Our Services</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <CarouselComponent testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;