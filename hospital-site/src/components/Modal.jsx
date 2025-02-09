// Done by Ryan Tang
import React from 'react'; // Import React

const Modal = ({ onClose }) => { // Define the Modal component
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> {/* Modal overlay */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full"> {/* Modal container */}
        <h2 className="text-2xl font-bold mb-4">KYS Wiki</h2> {/* Modal title */}
        <iframe
          src="https://en.wikipedia.org/wiki/Kuopio_University_Hospital" // Wikipedia page URL
          width="100%" // Full width
          height="600" // Increased height
          style={{ border: 0 }} // No border
          title="Kuopio University Hospital Wikipedia" // Iframe title
        ></iframe>
        <button onClick={onClose} className="bg-blue-900 text-white p-2 rounded mt-4">Close</button> {/* Close button */}
      </div>
    </div>
  );
};

export default Modal; // Export the Modal component
