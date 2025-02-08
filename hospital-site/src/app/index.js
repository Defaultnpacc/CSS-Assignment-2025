// Created by: [Ryan Tang]
// Home page for KYS Medical

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Simple component to embed a YouTube video
const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
    <div className="video-responsive">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

const HomePage = () => {
    return (
        <>
            <Head>
                <title>KYS Medical - Home</title>
                <meta name="description" content="Welcome to KYS Medical, your trusted healthcare partner." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className="top-bar">
                    <div className="contact-info">
                        <FaPhone /> <span>(123) 456-7890</span>
                    </div>
                    <div className="social-media">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/doctors">Doctors</Link></li>
                        <li><Link href="/appointments">Appointments</Link></li>
                        <li><Link href="/about">About Us / Contact Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/reviews">Reviews</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Welcome to KYS Medical</h1>
                    <p>Your health is our priority. We provide top-notch medical services to ensure your well-being.</p>
                </section>

                <section className="video-section">
                    <h2>Introduction to KYS Medical</h2>
                    <YouTubeEmbed videoId="CPF2-PpfAfA" />
                </section>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} KYS Medical. All rights reserved.</p>
            </footer>

            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f0f8ff;
                }
                .top-bar {
                    display: flex;
                    justify-content: space-between;
                    background-color: #4b0082;
                    padding: 0.5em 1em;
                    color: white;
                }
                .contact-info, .social-media {
                    display: flex;
                    align-items: center;
                }
                .contact-info span {
                    margin-left: 0.5em;
                }
                .social-media svg {
                    margin-left: 1em;
                    cursor: pointer;
                }
                header {
                    background: #6a5acd;
                    color: #fff;
                    padding: 1em 0;
                }
                nav ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    padding: 0;
                }
                nav ul li {
                    margin: 0 1em;
                }
                nav ul li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                }
                .hero {
                    text-align: center;
                    padding: 3em 0;
                    background: linear-gradient(to right, #6a5acd, #836fff);
                    color: white;
                }
                .hero h1 {
                    font-size: 2.5em;
                    margin-bottom: 0.5em;
                }
                .hero p {
                    font-size: 1.2em;
                }
                .video-section {
                    text-align: center;
                    padding: 2em 0;
                    background: #f8f8ff;
                }
                .video-section h2 {
                    font-size: 2em;
                    margin-bottom: 1em;
                }
                .video-responsive {
                    overflow: hidden;
                    padding-bottom: 56.25%;
                    position: relative;
                    height: 0;
                }
                .video-responsive iframe {
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                }
                footer {
                    background: #6a5acd;
                    color: #fff;
                    text-align: center;
                    padding: 1em 0;
                }
            `}</style>
        </>
    );
};

export default HomePage;
