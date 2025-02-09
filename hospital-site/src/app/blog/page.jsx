"use client"; // Add this directive to mark this file as a client-side component

import React, { useState } from "react"; // Import React and the useState hook
import Head from "next/head"; // Import the Next.js Head component to manage HTML head metadata
import Image from "next/image"; // Import Next.js Image component for optimized image handling
import Header from "../../components/Header"; // Import the custom Header component for top navigation

const BlogPage = () => {
  // Define the state variable `posts` to store the array of blog post data
  const [posts, setPosts] = useState([
    {
      title: "Understanding the Ageing Population", // Title of the first post
      description:
        "As global demographics shift, the aging population has become a significant societal concern. Many countries are experiencing a rise in the proportion of older adults due to increased life expectancy and declining birth rates. Understanding the implications of this trend is crucial for policymakers, businesses, and communities alike.", // Description of the first post
      img: "/blog-1.jpg", // Path to the image associated with the first post
    },
    {
      title: "Raising Cancer Awareness", // Title of the second post
      description:
        "Raising cancer awareness is a crucial step in promoting early detection, providing support for patients, and fostering a culture of prevention. Cancer affects millions of lives globally, and the key to combating it lies in spreading knowledge and understanding.", // Description of the second post
      img: "/blog-2.jpg", // Path to the image associated with the second post
    },
    {
      title: "Combatting Infectious Diseases", // Title of the third post
      description:
        "Combating infectious diseases is one of the most pressing challenges of our time. These diseases, caused by bacteria, viruses, fungi, or parasites, can spread rapidly, affecting individuals, communities, and even entire nations. To effectively fight against infectious diseases, a multifaceted approach that includes prevention, early detection, treatment, and global cooperation is essential.", // Description of the third post
      img: "/blog-3.jpg", // Path to the image associated with the third post
    },
  ]);

  return (
    <>
      <Header /> {/* Render the Header component at the top of the page */}
      <Head>
        {/* Metadata for the page */}
        <meta charSet="utf-8" /> {/* Define the character encoding for the page */}
        <title>KYS General Hospital - Your Health Blog</title> {/* Page title */}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" /> {/* Viewport settings for responsive design */}
        <meta content="Medical Blog, Health, Wellness" name="keywords" /> {/* Meta keywords for SEO */}
        <meta
          content="Stay updated with the latest health tips, medical news, and wellness advice."
          name="description" // Page description for SEO
        />
        <link href="/favicon.ico" rel="icon" /> {/* Link to the favicon */}
        <link rel="preconnect" href="https://fonts.gstatic.com" /> {/* Preconnect to Google's font server for faster loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet" // Import fonts from Google Fonts
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
          rel="stylesheet" // Import FontAwesome icons for the page
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet" // Import Bootstrap icons for the page
        />
        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet" // Import Owl Carousel styles for carousels (if needed)
        />
        <link
          href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet" // Import Tempus Dominus styles for date-time picker (if needed)
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" /> {/* Import Bootstrap styles */}
        <link href="/css/style.css" rel="stylesheet" /> {/* Import custom styles */}
      </Head>

      {/* Main content section */}
      <div className="container-fluid py-5"> {/* Outer container with padding */}
        <div className="container text-center"> {/* Inner container with centered text */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
            {/* Container for the title section with max width */}
            <h5 className="text-blue-600 font-bold uppercase text-4xl">Blog Post</h5> {/* Subtitle with blue color */}
            <h1 className="text-black font-semibold text-2xl">
              Our Latest Medical Blog Posts
            </h1> {/* Main header for the page */}
          </div>
          <div className="row g-5 justify-content-center"> {/* Row to layout blog posts */}
            {posts.map((post, idx) => (
              // Iterate through the posts array and render each post
              <div className="col-12 col-md-8" key={idx}> {/* Column for each post */}
                <div
                  className="bg-light rounded overflow-hidden mx-auto"
                  style={{ maxWidth: "600px" }} // Styling for the post container
                >
                  <Image
                    className="img-fluid d-block mx-auto" 
                    src={post.img} // Path to the image for this post
                    alt={post.title} // Alt text for the image
                    width={600} // Image width
                    height={350} // Image height
                  />
                  <div className="p-4"> {/* Padding around the post content */}
                    <h3 className="d-block mb-3 text-center font-weight-bold">
                      <strong>{post.title}</strong> {/* Display the title with bold styling */}
                    </h3>
                    <p className="m-0 font-weight-bold">{post.description}</p> {/* Display the description with bold styling */}
                  </div>
                  <div className="d-flex flex-column align-items-center border-top p-4">
                    {/* Footer section with author info and stats */}
                    <Image
                      className="rounded-circle mb-2"
                      src="/user.jpg" // Path to the user's avatar
                      width={50} // Avatar width
                      height={50} // Avatar height
                      alt="User" // Alt text for the avatar
                      style={{ display: "block", margin: "0 auto" }} // Center the avatar image
                    />
                    <small>Dr. Jane Smith</small> {/* Display author's name */}
                    <div className="d-flex mt-2"> {/* Row to display view and comment stats */}
                      <small className="ms-3">
                        <i className="far fa-eye text-primary me-1"></i>1,234 {/* View count */}
                      </small>
                      <small className="ms-3">
                        <i className="far fa-comment text-primary me-1"></i>45 {/* Comment count */}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage; // Export the BlogPage component
