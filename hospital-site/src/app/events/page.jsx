// Done by Gabriel Worrall

"use client"; // Use client directive

import React, { useState } from "react"; // Import React and useState
import Header from "../../components/Header"; // Import Header component
import Image from "next/image"; // Import Image component from Next.js

const NewsEventsPage = () => {
    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to manage the selected event details
    const [selectedEvent, setSelectedEvent] = useState(null);
    // State to manage the active event filter
    const [activeFilter, setActiveFilter] = useState("All");

    // Array of news and event objects with details
    const newsEvents = [
        {
            title: "New Hospital Wing Opening",
            description: "Join us for the grand opening of our new hospital wing, featuring state-of-the-art facilities.",
            date: "March 15, 2025",
            image: "/events-1.jpg",
            details: "The new wing includes advanced surgical suites, a modern maternity ward, and a dedicated pediatric care unit. The event will include guided tours and a ribbon-cutting ceremony.",
            type: "Event",
        },
        {
            title: "Health Fair 2025",
            description: "Our annual health fair is back! Free health screenings, consultations, and wellness workshops.",
            date: "April 20, 2025",
            image: "/events-2.jpg",
            details: "This year's health fair will feature over 50 exhibitors, including local healthcare providers, fitness experts, and nutritionists. Don't miss the keynote speech by Dr. Jane Doe on preventive healthcare.",
            type: "Health Fair",
        },
        {
            title: "Cardiology Seminar",
            description: "Learn about the latest advancements in cardiology from leading experts in the field.",
            date: "May 10, 2025",
            image: "/events-3.jpg",
            details: "The seminar will cover topics such as minimally invasive heart surgeries, advancements in cardiac imaging, and the latest in heart failure management. Registration is required.",
            type: "Seminar",
        },
        {
            title: "Pediatric Health Workshop",
            description: "A workshop for parents on child health, nutrition, and common childhood illnesses.",
            date: "June 5, 2025",
            image: "/events-4.jpg",
            details: "This interactive workshop will be led by our pediatric specialists and will include Q&A sessions, hands-on activities, and resources for parents.",
            type: "Workshop",
        },
        {
            title: "Orthopedics Open House",
            description: "Explore our orthopedics department and meet our team of specialists.",
            date: "July 22, 2025",
            image: "/events-5.webp",
            details: "The open house will feature demonstrations of the latest orthopedic technologies, including robotic-assisted surgeries and 3D-printed prosthetics.",
            type: "Event",
        },
        {
            title: "Mental Health Awareness Day",
            description: "A day dedicated to raising awareness about mental health and wellness.",
            date: "October 10, 2025",
            image: "/events-6.png",
            details: "Join us for a series of talks, workshops, and activities focused on mental health. Topics include stress management, mindfulness, and coping strategies.",
            type: "Workshop",
        },
    ];

    // Function to handle event card click
    const handleEventClick = (event) => {
        setSelectedEvent(event); // Set the selected event
        setIsModalOpen(true); // Open the modal
    };

    // Function to handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setTimeout(() => setSelectedEvent(null), 300); // Wait for animation to finish before clearing the selected event
    };

    // Function to filter events by type
    const filteredEvents = activeFilter === "All" ? newsEvents : newsEvents.filter((event) => event.type === activeFilter);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
            <Header /> {/* Header component */}
            <main className="p-8 sm:p-20 w-full max-w-6xl">
                <h1 className="text-5xl font-bold mb-12 text-blue-900 text-center">News & Events</h1> {/* Page title */}

                {/* News Carousel */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-blue-800">Latest News</h2>
                    <div className="flex overflow-x-auto gap-6 pb-4">
                        {newsEvents.slice(0, 4).map((news, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-80 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => handleEventClick(news)}
                            >
                                {news.image && (
                                    <div className="mb-4">
                                        <Image
                                            src={news.image}
                                            alt={news.title}
                                            width={300}
                                            height={200}
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-4 text-blue-800">{news.title}</h3>
                                <p className="text-gray-600 mb-4">{news.description}</p>
                                <p className="text-sm text-gray-500">{news.date}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Event Filters */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-blue-800">Upcoming Events</h2>
                    <div className="flex gap-4 mb-8">
                        {["All", "Event", "Health Fair", "Seminar", "Workshop"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                                    activeFilter === filter
                                        ? "bg-blue-900 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-blue-900 hover:text-white"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="relative">
                    <div className="absolute left-1/2 w-1 bg-blue-200 h-full transform -translate-x-1/2"></div> {/* Timeline line */}
                    {filteredEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-12`}
                        >
                            <div className="w-1/2 p-6">
                                <div
                                    className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                    onClick={() => handleEventClick(event)}
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-blue-800">{event.title}</h3>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <button
                                        onClick={() => handleEventClick(event)}
                                        className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 p-6">
                                {event.image && (
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={500}
                                        height={300}
                                        className="rounded-lg shadow-lg"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </main>

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
                    {selectedEvent?.image && (
                        <div className="mb-4">
                            <Image
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{selectedEvent?.title}</h3>
                    <p className="text-gray-600 mb-6">{selectedEvent?.details}</p>
                    <button
                        onClick={handleCloseModal}
                        className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsEventsPage;