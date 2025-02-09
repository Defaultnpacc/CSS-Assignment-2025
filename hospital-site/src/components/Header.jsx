// Done by Ryan Tang
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 w-full flex justify-between items-center">
      <Link href="/home" legacyBehavior>
        <a>
          <h1 className="text-3xl font-bold">KYS General Hospital</h1>
        </a>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src="/cell-phone-svgrepo-com.svg" alt="Phone" className="h-6 w-6" />
          <span>+65 8700 0921</span>
        </div>
        <Link href="https://x.com/anandrdeshpande/with_replies" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <img src="/x_logo.svg" alt="X.com" className="h-6 w-6" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/anand-deshpande-5788956a/?originalSubdomain=sg" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <img src="/LinkedIn_icon.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </Link>
        <div className="relative">
          <button
            className="bg-white text-blue-900 p-2 rounded-lg shadow-lg"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Useful Pages
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <Link href="/" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Test Page</a>
              </Link>
              <Link href="/home" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Home Page</a>
              </Link>
              <Link href="/events" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Events</a>
              </Link>
              <Link href="/doctors" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Doctors</a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Blog</a>
              </Link>
              <Link href="/appointment" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Appointment</a>
              </Link>
              <Link href="/volunteer" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Volunteer Information</a>
              </Link>
              <Link href="/testimonials" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Testimonials</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Services</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block px-4 py-2 text-blue-900 hover:bg-blue-100">About</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
