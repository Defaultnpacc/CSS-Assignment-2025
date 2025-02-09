"use client"; // Use client directive

import React, { useState, useRef } from "react"; // Import React, useState, and useRef
import Header from "../../components/Header"; // Import Header component
import Image from "next/image"; // Import Image component from Next.js

const VolunteerPage = () => {
    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to manage the selected volunteer role
    const [selectedRole, setSelectedRole] = useState(null);
    // Ref for the Contact Us section
    const contactRef = useRef(null);

    // Array of volunteer opportunities
    const volunteerOpportunities = [
        {
            title: "Patient Support Volunteer",
            description: "Provide companionship and support to patients during their hospital stay.",
            icon: "❤️",
            details: "As a Patient Support Volunteer, you will assist with non-medical tasks, such as reading to patients, helping them with meals, or simply offering a listening ear. Training will be provided.",
        },
        {
            title: "Event Volunteer",
            description: "Help organize and run hospital events, such as health fairs and fundraisers.",
            icon: "🎉",
            details: "Event Volunteers assist with setup, registration, and coordination during hospital events. This role is perfect for those who enjoy working in a dynamic, team-oriented environment.",
        },
        {
            title: "Administrative Volunteer",
            description: "Assist with clerical tasks, such as filing, data entry, and answering phones.",
            icon: "📂",
            details: "Administrative Volunteers provide crucial support to our hospital staff by handling office tasks. This role is ideal for organized individuals with strong communication skills.",
        },
        {
            title: "Youth Program Volunteer",
            description: "Work with children and teens in our pediatric and youth programs.",
            icon: "👶",
            details: "Youth Program Volunteers engage with young patients through activities, games, and educational programs. A background check and training are required.",
        },
        {
            title: "Pet Therapy Volunteer",
            description: "Bring your certified therapy animal to visit patients.",
            icon: "🐾",
            details: "Pet Therapy Volunteers and their animals provide comfort and joy to patients. Your pet must be certified through a recognized therapy animal organization.",
        },
        {
            title: "Community Outreach Volunteer",
            description: "Represent the hospital at community events and health screenings.",
            icon: "🌍",
            details: "Community Outreach Volunteers help promote the hospital's mission and services at local events. Strong interpersonal skills are a must.",
        },
    ];

    // Function to handle volunteer role click
    const handleRoleClick = (role) => {
        setSelectedRole(role); // Set the selected role
        setIsModalOpen(true); // Open the modal
    };

    // Function to handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setTimeout(() => setSelectedRole(null), 300); // Wait for animation to finish before clearing the selected role
    };

    // Function to scroll to the Contact Us section
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the Contact Us section
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
            <Header /> {/* Header component */}

            {/* Hero Section */}
            <section className="w-full bg-blue-900 text-white py-20 text-center">
                <h1 className="text-5xl font-bold mb-6">Volunteer With Us</h1>
                <p className="text-xl mb-8">Join our team of dedicated volunteers and make a difference in the lives of our patients and community.</p>
                <button
                    onClick={scrollToContact} // Scroll to the Contact Us section
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
                >
                    Get Involved
                </button>
            </section>

            {/* Volunteer Opportunities Grid */}
            <main className="p-8 sm:p-20 w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-12 text-blue-900 text-center">Volunteer Opportunities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {volunteerOpportunities.map((role, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleRoleClick(role)} // Handle role click
                        >
                            <div className="text-4xl mb-4">{role.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-800">{role.title}</h3>
                            <p className="text-gray-600">{role.description}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Steps to Get Involved */}
            <section className="bg-white w-full py-16">
                <div className="max-w-6xl mx-auto px-8 sm:px-20">
                    <h2 className="text-3xl font-bold mb-12 text-blue-900 text-center">How to Get Involved</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-4 text-blue-900">1</div>
                            <h3 className="text-xl font-semibold mb-4">Apply Online</h3>
                            <p className="text-gray-600">Fill out our volunteer application form to get started.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-4 text-blue-900">2</div>
                            <h3 className="text-xl font-semibold mb-4">Attend an Orientation</h3>
                            <p className="text-gray-600">Learn about our hospital and volunteer programs in a brief orientation session.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-4 text-blue-900">3</div>
                            <h3 className="text-xl font-semibold mb-4">Start Volunteering</h3>
                            <p className="text-gray-600">Begin your journey as a hospital volunteer and make a difference!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section ref={contactRef} className="w-full bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-8 sm:px-20">
                    <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Contact Us</h2>
                    <form className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                                rows="5"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white p-6 w-full text-center mt-8">
                <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
            </footer>

            {/* Modal with Animation */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${
                    isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    className={`bg-white rounded-lg p-8 max-w-md w-full transform transition-transform duration-300 ${
                        isModalOpen ? "scale-100" : "scale-90"
                    }`}
                >
                    <h3 className="text-2xl font-bold mb-4">{selectedRole?.title}</h3>
                    <p className="text-gray-600 mb-6">{selectedRole?.details}</p>
                    <button
                        onClick={handleCloseModal} // Handle modal close
                        className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPage;