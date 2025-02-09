// Done by Gabriel Worrall

"use client"; // Indicates that this component is a client-side component

import { useState } from "react"; // Importing useState hook from React
import Image from "next/image"; // Importing Image component from Next.js
import Header from "../../components/Header"; // Importing Header component

export default function ServicesPage() {
    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to manage the selected service details
    const [selectedService, setSelectedService] = useState(null);

    // Array of service objects with details
    const services = [
        {
            title: "Emergency Care",
            description: "Our emergency department is open 24/7 to provide immediate care for urgent medical conditions.",
            icon: "🚑",
            image: "/services-1.jpg",
            details: "Our emergency care unit is equipped with state-of-the-art technology and staffed by experienced professionals to handle all types of medical emergencies."
        },
        {
            title: "Surgery",
            description: "We offer a wide range of surgical procedures, from minor outpatient surgeries to complex operations.",
            icon: "🩺",
            image: "/services-2.jpg",
            details: "Our surgical team specializes in various fields, including general surgery, orthopedic surgery, and minimally invasive procedures."
        },
        {
            title: "Maternity Care",
            description: "Our maternity ward provides comprehensive care for expectant mothers, including prenatal, delivery, and postnatal services.",
            icon: "👶",
            image: "/services-3.jpg",
            details: "We offer personalized care plans, advanced birthing options, and support services for new mothers and their families."
        },
        {
            title: "Pediatrics",
            description: "Our pediatric department offers specialized care for infants, children, and adolescents.",
            icon: "🧒",
            image: "/services-4.jpg",
            details: "Our pediatricians are dedicated to providing compassionate care for children, including routine check-ups, vaccinations, and treatment for illnesses."
        },
        {
            title: "Cardiology",
            description: "Our cardiology department provides advanced care for heart conditions, including diagnostics, treatment, and rehabilitation.",
            icon: "❤️",
            image: "/services-5.jpg",
            details: "We offer comprehensive cardiac care, including diagnostic imaging, interventional procedures, and cardiac rehabilitation programs."
        },
        {
            title: "Orthopedics",
            description: "We offer comprehensive orthopedic services, including treatment for fractures, joint replacements, and sports injuries.",
            icon: "🦴",
            image: "/services-6.jpg",
            details: "Our orthopedic specialists provide expert care for bone and joint conditions, including surgical and non-surgical treatments."
        },
    ];

    // Function to handle service card click
    const handleServiceClick = (service) => {
        setSelectedService(service); // Set the selected service
        setIsModalOpen(true); // Open the modal
    };

    // Function to handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setTimeout(() => setSelectedService(null), 300); // Wait for animation to finish before clearing the selected service
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header /> {/* Render the Header component */}
            <main className="p-8 sm:p-20">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Medical Services</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        At KYS General Hospital, we offer a wide range of medical services and specialties to meet the needs of our patients. Our dedicated team of healthcare professionals is committed to providing the highest quality care.
                    </p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index} // Unique key for each service
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                            onClick={() => handleServiceClick(service)} // Handle click event
                        >
                            <div className="p-6">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="bg-blue-900 text-white p-6 text-center">
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
                    {/* Render the selected service image if available */}
                    {selectedService?.image && (
                        <div className="mb-4">
                            <Image
                                src={selectedService.image}
                                alt={selectedService.title}
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{selectedService?.title}</h3>
                    <p className="text-gray-600 mb-6">{selectedService?.details}</p>
                    <button
                        onClick={handleCloseModal} // Handle close button click
                        className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}