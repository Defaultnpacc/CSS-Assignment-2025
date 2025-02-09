"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header"; // Update the import path for Header component

const Team = () => {
    const teamMembers = [
        { name: "Dr. Ethan Lim", specialty: "Pregnancy Care", imgSrc: "/team-1.jpg", description: "Doctorate in looking at kids" },
        { name: "Dr. Nick Gru", specialty: "Dental Care", imgSrc: "/team-2.jpg", description: "Doctorate in oral health" },
        { name: "Dr. Mike Oxlong", specialty: "Operation and Surgery", imgSrc: "/team-3.jpg", description: "Doctorate in operation" },
        { name: "Dr. Ben Dover", specialty: "Health Checkup", imgSrc: "/team-4.jpg", description: "Doctorate in health check-ups" }
    ];

    return (
        <>
            <Header /> {/* Add the Header component here */}
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
                <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h1 className="text-blue-600 font-bold uppercase text-5xl">Our Doctors</h1>
                    <h2 className="text-black font-semibold text-3xl">Qualified Healthcare Professionals</h2>
                </div>
                    <div className="flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
const TeamMember = ({ name, specialty, imgSrc, description }) => {
    return (
        <div className="team-item m-4 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
            <div className="relative w-full h-64">
                <Image className="object-cover w-full h-full" src={imgSrc} alt={name} layout="fill" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <h6 className="text-md font-medium text-gray-600 mb-2">{specialty}</h6>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="flex justify-center p-4 border-t">
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-500 mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
};

// Add the drop-down menu component
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="bg-blue-500 text-white p-2 rounded" onClick={toggleMenu}>Useful Pages</button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg z-50">
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

export default Team;
