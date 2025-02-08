// Done by Ryan Tang
import React, { useState } from 'react'; // Import the useState hook
import Image from 'next/image'; // Import the Image component

const images = [ // Image paths
  '/image_1.jpg', // image paths img1
  '/image_2.jpg', // image paths img2
  '/image_3.png' // image paths img3
];

const Carousel = () => { // Carousel component
  const [currentIndex, setCurrentIndex] = useState(0); // Set the current index to 0

  const nextImage = () => { // Function to go to the next image
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Set the current index to the next image
  };

  const prevImage = () => { // Function to go to the previous image
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Set the current index to the previous image
  };

  return ( // Return the carousel
    <div className="relative w-full max-w-[600px] mx-auto"> {/* Carousel container */}
      <Image // Image component
        src={images[currentIndex]} // Image source
        alt={`Image ${currentIndex + 1}`} // Image alt text
        width={600} // Image width
        height={400} // Image height
        className="w-full h-full object-cover rounded-lg" // Image styling
      /> 
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"> {/* Previous button */}
        &lt;
      </button> 
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"> {/* Next button */}
        &gt;
      </button> 
    </div> // End of Carousel container
  );
};

export default Carousel; // Export the Carousel component
