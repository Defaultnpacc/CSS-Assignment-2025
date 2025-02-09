//Done by Ryan Tang
"use client"; // Use client directive

import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import Header from '../../components/Header'; // Import Header component
import axios from 'axios'; // Import axios for data fetching

const AboutPage = () => { // Define AboutPage component
    const [formData, setFormData] = useState({ // Define form data state
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({}); // Define errors state
    const [popupMessage, setPopupMessage] = useState(''); // Define popup message state
    const [doctors, setDoctors] = useState([]); // Define doctors state

    useEffect(() => { // Effect to clear popup message after 5 seconds
        if (popupMessage) {
            const timer = setTimeout(() => {
                setPopupMessage(''); // Clear popup message
            }, 5000);
            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [popupMessage]);

    useEffect(() => { // Effect to fetch doctor information
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('https://api.example.com/doctors'); // Fetch data from API
                setDoctors(response.data.doctors); // Set doctors state
            } catch (error) {
                // Handle errors
                if (error.response) {
                    console.error('Error response:', error.response.data);
                } else if (error.request) {
                    console.error('Error request:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                console.error('Error config:', error.config);
            }
        };

        fetchDoctors(); // Call fetchDoctors function
    }, []);

    const handleChange = (e) => { // Handle input change
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value // Update form data state
        });
    };

    const validateForm = () => { // Validate form data
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors; // Return validation errors
    };

    const handleSubmit = (e) => { // Handle form submission
        e.preventDefault();
        const validationErrors = validateForm(); // Validate form data
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors state
            setPopupMessage('Please fill in required fields'); // Set popup message
        } else {
            setErrors({}); // Clear errors state
            setPopupMessage('Form submitted successfully'); // Set success message
            console.log('Form submitted:', formData); // Log form data
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
            {popupMessage && (
                <div className={`fixed top-0 left-0 right-0 p-4 text-center ${popupMessage === 'Form submitted successfully' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                    {popupMessage} {/* Popup message */}
                </div>
            )}
            <Header /> {/* Header component */}
            <main className="p-8 sm:p-20 w-full max-w-4xl"> {/* Main content */}
                <h1 className="text-2xl font-bold mb-4">About Us</h1> {/* Page title */}
                <p className="mb-4">Welcome to KYS General Hospital.</p> {/* Welcome message */}

                {/* Contact Information Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">Contact Information</h2>
                    <p className="mb-2 text-gray-600">Address: Kuopio University Hospital, Puijonlaaksontie 2, 70200 Kuopio, Finland</p>
                    <p className="mb-2 text-gray-600">Phone: +65 8700 0921</p>
                    <p className="mb-2 text-gray-600">Email: contact@kysnow.com</p>
                </section>

                {/* Contact Form Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">Contact Us</h2>
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
                            {errors.name && <p className="text-red-500 text-sm">* {errors.name}</p>} {/* Name error */}
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
                            {errors.email && <p className="text-red-500 text-sm">* {errors.email}</p>} {/* Email error */}
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
                            {errors.message && <p className="text-red-500 text-sm">* {errors.message}</p>} {/* Message error */}
                        </div>
                        <button type="submit" className="bg-blue-900 text-white p-2 rounded">Submit</button> {/* Submit button */}
                    </form>
                </section>

                {/* Doctors Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">Our Doctors</h2>
                    {doctors.length > 0 ? (
                        <ul>
                            {doctors.map((doctor, index) => (
                                <li key={index} className="mb-4">
                                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                                    <p className="text-gray-600">Specialty: {doctor.specialty}</p>
                                    <p className="text-gray-600">Contact: {doctor.contact}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No doctor information available at the moment.</p>
                    )}
                </section>

                {/* Google Maps Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">Our Location</h2>
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
                </section>

                {/* Directions Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Directions to KYS General Hospital</h2>
                    <p className="mb-4 text-gray-600">Our hospital is located at Kuopio University Hospital, Puijonlaaksontie 2, 70200 Kuopio, Finland.</p>
                    <p className="mb-4 text-gray-600">You can reach us by car, public transport, or walking. Below are the detailed directions:</p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li className="text-gray-700"><strong>By Car:</strong> Take the main road E63 and follow the signs to Kuopio University Hospital.</li>
                        <li className="text-gray-700"><strong>By Bus:</strong> Take bus number 5 or 6 from the city center and get off at the hospital stop.</li>
                        <li className="text-gray-700"><strong>By Foot:</strong> The hospital is a 20-minute walk from the city center.</li>
                    </ul>
                </section>

                {/* Parking Information Section */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Parking Information</h2>
                    <p className="mb-4 text-gray-600">We have ample parking space available for our patients and visitors. The parking lot is located next to the main entrance of the hospital.</p>
                    <p className="mb-4 text-gray-600">Parking fees are as follows:</p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li className="text-gray-700"><strong>First 30 minutes:</strong> Free</li>
                        <li className="text-gray-700"><strong>1 hour:</strong> €2</li>
                        <li className="text-gray-700"><strong>Daily maximum:</strong> €10</li>
                    </ul>
                </section>
            </main>
            <footer className="bg-blue-900 text-white p-4 w-full text-center"> {/* Footer */}
                <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage; // Export AboutPage component