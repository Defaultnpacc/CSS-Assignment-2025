// header done by Ryan Tang
import React from "react"; // Import React

const Header = () => { // Define the Header component
    return (
        <header className="bg-primary text-white py-4"> {/* Header container */}
            <div className="container mx-auto flex justify-between items-center"> {/* Flex container */}
                <h1 className="text-2xl font-bold">Hospital Site</h1> {/* Site title */}
                <nav> {/* Navigation */}
                    <a href="/" className="mx-2">Home</a> {/* Home link */}
                    <a href="/about" className="mx-2">About</a> {/* About link */}
                    <a href="/services" className="mx-2">Services</a> {/* Services link */}
                    <a href="/contact" className="mx-2">Contact</a> {/* Contact link */}
                </nav>
            </div>
        </header>
    );
};

export default Header; // Export the Header component
