// page done by Ryan Tang
"use client"; // Use client directive

import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import Header from '../../components/Header'; // Import Header component

const AboutPage = () => { // Define AboutPage component
  const [formData, setFormData] = useState({ // Define form data state
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  const handleChange = (e) => { // Handle input change
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => { // Handle form submission
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPopupMessage('Please fill in required fields');
    } else {
      setErrors({});
      setPopupMessage('Form submitted successfully');
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
      {popupMessage && (
        <div className={`fixed top-0 left-0 right-0 p-4 text-center ${popupMessage === 'Form submitted successfully' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
          {popupMessage}
        </div>
      )}
      <Header /> {/* Header component */}
      <main className="p-8 sm:p-20 w-full max-w-4xl"> {/* Main content */}
        <h1 className="text-2xl font-bold mb-4">About Us</h1> {/* Page title */}
        <p className="mb-4">Welcome to KYS General Hospital.</p> {/* Welcome message */}
        <div className="mt-4"> {/* Contact information */}
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="mb-2">Address: Kuopio University Hospital, Puijonlaaksontie 2, 70200 Kuopio, Finland</p>
          <p className="mb-2">Phone: +65 8700 0921</p>
          <p className="mb-2">Email: contact@kysnow.com</p>
        </div>
        <div className="mt-4"> {/* Contact form */}
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">* {errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">* {errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm">* {errors.message}</p>}
            </div>
            <button type="submit" className="bg-blue-900 text-white p-2 rounded">Submit</button>
          </form>
        </div>
        <div className="mt-4"> {/* Google Maps iframe */}
          <h2 className="text-xl font-semibold mb-2">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1817.693787309882!2d27.647025!3d62.897541999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4684b081f6d91bd1%3A0x24dcaa262f0c85c7!2sKuopio%20University%20Hospital!5e0!3m2!1sen!2ssg!4v1739014409848!5m2!1sen!2ssg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kuopio University Hospital Location"
            className="w-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </main>
      <footer className="bg-blue-900 text-white p-4 w-full text-center"> {/* Footer */}
        <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage; // Export AboutPage component
