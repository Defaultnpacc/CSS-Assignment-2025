"use client"; // Add this directive to mark this file as a client-side component

import React, { useState } from "react"; // Import React and the useState hook
import Image from "next/image"; // Import Next.js Image component for optimized image handling
import Header from "../../components/Header"; // Import the custom Header component for top navigation

const Team = () => {
    // Define the array of team members with their details
    const teamMembers = [
        { name: "Dr. Ethan Lim", specialty: "Pregnancy Care", imgSrc: "/team-1.jpg", description: "Doctorate in looking at kids" },
        { name: "Dr. Nick Gru", specialty: "Dental Care", imgSrc: "/team-2.jpg", description: "Doctorate in oral health" },
        { name: "Dr. Mike Oxlong", specialty: "Operation and Surgery", imgSrc: "/team-3.jpg", description: "Doctorate in operation" },
        { name: "Dr. Ben Dover", specialty: "Health Checkup", imgSrc: "/team-4.jpg", description: "Doctorate in health check-ups" }
    ];

    return (
        <>
            <Header /> {/* Render the Header component at the top of the page */}
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        {/* Container for the title section with max width */}
                        <h1 className="text-blue-600 font-bold uppercase text-4xl">Our Doctors</h1> {/* Main header for the page */}
                        <h2 className="text-black font-semibold text-2xl">Qualified Healthcare Professionals</h2> {/* Subtitle */}
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {/* Iterate through the teamMembers array and render each member */}
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer section */}
            <footer className="bg-blue-900 text-white p-6 w-full text-center mt-8">
                <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
            </footer>
        </>
    );
};

// Component to render individual team member details
const TeamMember = ({ name, specialty, imgSrc, description }) => {
    return (
        <div className="team-item m-4 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
            <div className="relative w-full h-64">
                <Image className="object-cover w-full h-full" src={imgSrc} alt={name} layout="fill" /> {/* Team member image */}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">{name}</h3> {/* Team member name */}
                <h6 className="text-md font-medium text-gray-600 mb-2">{specialty}</h6> {/* Team member specialty */}
                <p className="text-gray-700">{description}</p> {/* Team member description */}
            </div>
            <div className="flex justify-center p-4 border-t">
                {/* Social media links */}
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
};

// Component for the dropdown menu
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the dropdown menu visibility
    };

    return (
        <div className="relative">
            <button className="bg-blue-500 text-white p-2 rounded" onClick={toggleMenu}>Useful Pages</button> {/* Button to toggle the dropdown menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-50">
                    {/* Dropdown menu items */}
                    <ul className="list-none p-2">
                        <li><a href="#" className="block p-2 hover:bg-gray-200">Test</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-200">Home Page</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-200">Doctors</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-200">Appointment</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-200">Testimonials</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Team; // Export the Team component
