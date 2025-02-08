"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold">KYS General Hospital</h1>
      </header>
      <main className="p-8 sm:p-20">
        <section className="mb-12 relative flex justify-center" style={{ marginBottom: '2rem' }}>
          {isVideoPlaying ? (
            <div className="w-full h-auto rounded-lg shadow-lg" style={{ width: '600px', height: '400px' }}>
              <iframe
                width="600"
                height="400"
                src="https://www.youtube.com/embed/CPF2-PpfAfA?si=d69bH3TWL4ly0QOz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          ) : (
            <div className="relative cursor-pointer" onClick={() => setIsVideoPlaying(true)} style={{ width: '600px', height: '400px' }}>
              <Image
                src="/about.png"
                alt="About"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </section>
        <section className="text-center sm:text-left">
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
        </section>
      </main>
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
