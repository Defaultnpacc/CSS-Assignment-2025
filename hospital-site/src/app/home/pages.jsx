import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>KYS General Hospital</h1>
        <nav>
          <ul>
            <li><a href="#welcome">Welcome</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section id="welcome">
        <h2>Welcome to KYS General Hospital</h2>
        <p>We are committed to providing the best healthcare services to our community.</p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Emergency Care</li>
          <li>Outpatient Services</li>
          <li>Inpatient Services</li>
          <li>Surgical Services</li>
          <li>Diagnostic Imaging</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@kysgeneralhospital.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default HomePage;
