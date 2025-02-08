import React from "react";

const Header = () => {
    return (
        <header className="bg-primary text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hospital Site</h1>
                <nav>
                    <a href="/" className="mx-2">Home</a>
                    <a href="/about" className="mx-2">About</a>
                    <a href="/services" className="mx-2">Services</a>
                    <a href="/contact" className="mx-2">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
