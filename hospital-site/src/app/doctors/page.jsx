"use client";

import React from "react";
import Image from "next/image";
import Header from "../../components/Header"; // Update the import path for Header component

const Team = () => {
    const teamMembers = [
        { name: "Dr. Ethan Lim", specialty: "Pregnancy Care", imgSrc: "team-1.jpg", description: "Doctorate in looking at kids" },
        { name: "Dr. Nick Gru", specialty: "Dental Care", imgSrc: "team-2.jpg", description: "Doctorate in oral health" },
        { name: "Dr. Mike Oxlong", specialty: "Operation and Surgery", imgSrc: "team-3.jpg", description: "Doctorate in operation" },
        { name: "Dr. Ben Dover", specialty: "Health Checkup", imgSrc: "team-3.jpg", description: "Doctorate in health check-ups" }
    ];

    return (
        <>
            <Header /> {/* Add the Header component here */}
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5 className="d-inline-block text-secondary text-uppercase border-bottom border-5">Our Doctors</h5>
                        <h1 className="display-4 text-primary">Qualified Healthcare Professionals</h1>
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

export default Team;
