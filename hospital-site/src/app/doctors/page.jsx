"use client";

import React from "react";
import Image from "next/image";

const Team = () => {
    const teamMembers = [
        { name: "Dr. Ethan Lim", specialty: "Pregnancy Care", imgSrc: "/img/team-1.jpg", description: "Doctorate in looking at kids" },
        { name: "Dr. Nick Gru", specialty: "Dental Care", imgSrc: "/img/team-2.jpg", description: "Doctorate in touching your teeths" },
        { name: "Dr. Mike Oxlong", specialty: "Operation and Surgery", imgSrc: "/img/team-3.jpg", description: "Doctorate in going inside you" },
        { name: "Dr. Ben Dover", specialty: "Health Checkup", imgSrc: "/img/team-3.jpg", description: "Doctorate in checking your health up" }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                    <h1 className="display-4">Qualified Healthcare Professionals</h1>
                </div>
                <div className="owl-carousel team-carousel position-relative">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TeamMember = ({ name, specialty, imgSrc, description }) => {
    return (
        <div className="team-item">
            <div className="row g-0 bg-light rounded overflow-hidden">
                <div className="col-12 col-sm-5 h-100">
                    <Image className="img-fluid h-100" src={imgSrc} alt={name} width={500} height={500} style={{ objectFit: "cover" }} />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                    <div className="mt-auto p-4">
                        <h3>{name}</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">{specialty}</h6>
                        <p className="m-0">{description}</p>
                    </div>
                    <div className="d-flex mt-auto border-top p-4">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
