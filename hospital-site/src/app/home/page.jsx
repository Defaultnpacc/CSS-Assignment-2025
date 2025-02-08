// page done by Ryan Tang
"use client"; // Use client directive

import { useState, useEffect } from "react"; // Import useState and useEffect
import Image from "next/image"; // Import Image component
import Header from "../../components/Header"; // Import Header component
import Modal from "../../components/Modal"; // Import Modal component
import Carousel from "../../components/Carousel"; // Import Carousel component

export default function HomePage() { // Define HomePage component
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Define isVideoPlaying state
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state

  useEffect(() => { // Load user preferences from localStorage
    const savedVideoState = localStorage.getItem('isVideoPlaying');
    if (savedVideoState) {
      setIsVideoPlaying(JSON.parse(savedVideoState));
    }
  }, []);

  useEffect(() => { // Save user preferences to localStorage
    localStorage.setItem('isVideoPlaying', JSON.stringify(isVideoPlaying));
  }, [isVideoPlaying]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
      <Header /> {/* Header component */}
      <main className="p-8 sm:p-20 w-full max-w-4xl"> {/* Main content */}
        <section className="flex flex-col items-center mb-8"> {/* Video section */}
          <div className="relative w-full max-w-[600px] aspect-[3/2]"> {/* Video container */}
            {isVideoPlaying ? (
              <iframe
                width="600"
                height="400"
                src="https://www.youtube.com/embed/CPF2-PpfAfA?si=d69bH3TWL4ly0QOz&autoplay=1" // Add autoplay=1 to the URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            ) : (
              <div
                className="relative cursor-pointer w-full h-full rounded-lg overflow-hidden shadow-lg"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Image
                  src="/about.png"
                  alt="About"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="bg-white p-3 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-blue-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="text-center sm:text-left"> {/* Welcome section */}
          <h2 className="text-2xl font-bold mb-4">Welcome to KYS General Hospital</h2>
          <p className="mb-4">
            At KYS General Hospital, we are committed to providing the highest quality healthcare services to our community. Our team of experienced professionals is dedicated to ensuring your well-being and comfort.
          </p>
          <p className="mb-4">
            We offer a wide range of medical services, including emergency care, surgery, maternity care, and more. Our state-of-the-art facilities and advanced medical technology ensure that you receive the best possible care.
          </p>
          <p className="mb-4">
            Thank you for choosing KYS General Hospital. We look forward to serving you and your family.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-900 text-white p-2 rounded">Learn More</button>
        </section>
        <section className="mt-8"> {/* Carousel section */}
          <Carousel />
        </section>
      </main>
      <footer className="bg-blue-900 text-white p-4 w-full text-center"> {/* Footer */}
        <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
      </footer>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />} {/* Modal */}
    </div>
  );
}
