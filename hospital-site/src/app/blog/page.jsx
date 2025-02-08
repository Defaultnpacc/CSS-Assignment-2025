"use client"; // Add this directive

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import Header from '../../components/Header'; // Import the Header component

const BlogPage = () => {
  const [posts, setPosts] = useState([
    { title: 'Understanding the Ageing Population', description: 'As global demographics shift, the aging population has become a significant societal concern. Many countries are experiencing a rise in the proportion of older adults due to increased life expectancy and declining birth rates. Understanding the implications of this trend is crucial for policymakers, businesses, and communities alike.', img: '/blog-1.jpg' },
    { title: 'Raising Cancer Awareness', description: 'Raising cancer awareness is a crucial step in promoting early detection, providing support for patients, and fostering a culture of prevention. Cancer affects millions of lives globally, and the key to combating it lies in spreading knowledge and understanding.', img: '/blog-2.jpg' },
    { title: 'Combatting Infectious Diseases', description: 'Combating infectious diseases is one of the most pressing challenges of our time. These diseases, caused by bacteria, viruses, fungi, or parasites, can spread rapidly, affecting individuals, communities, and even entire nations. To effectively fight against infectious diseases, a multifaceted approach that includes prevention, early detection, treatment, and global cooperation is essential.', img: '/blog-3.jpg' }
  ]);

  const [newPost, setNewPost] = useState({ title: '', description: '', img: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ title: '', description: '', img: '' });
  };

  return (
    <>
      <Header />
      <Head>
        <meta charSet="utf-8" />
        <title>KYS General Hospital - Your Health Blog</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Medical Blog, Health, Wellness" name="keywords" />
        <meta content="Stay updated with the latest health tips, medical news, and wellness advice." name="description" />
        <link href="/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
      </Head>

      <div className="container-fluid py-5">
        <div className="container text-center">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
          </div>
          <div className="row g-5 justify-content-center">
            {posts.map((post, idx) => (
              <div className="col-12 col-md-8" key={idx}>
                <div className="bg-light rounded overflow-hidden mx-auto" style={{ maxWidth: '600px' }}>
                  <Image className="img-fluid d-block mx-auto" src={post.img} alt={post.title} width={600} height={350} />
                  <div className="p-4">
                    <h3 className="d-block mb-3 text-center font-weight-bold">{post.title}</h3>
                    <p className="m-0 font-weight-bold">{post.description}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center border-top p-4">
                    <Image className="rounded-circle mb-2" src="/user.jpg" width={50} height={50} alt="User" style={{ display: 'block', margin: '0 auto' }} />
                    <small>Dr. Jane Smith</small>
                    <div className="d-flex mt-2">
                      <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>1,234</small>
                      <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>45</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px' }}>
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px', border: '2px solid #333', padding: '10px', borderRadius: '5px' }}>
            <h5 className="d-inline-block text-primary text-uppercase">Add New Blog Post</h5>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" className="form-control border border-dark" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px' }} id="title" name="title" value={newPost.title} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea className="form-control border border-dark" id="description" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px' }} name="description" rows="3" value={newPost.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">Image URL:</label>
              <input type="text" className="form-control border border-dark" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px' }} id="img" name="img" value={newPost.img} onChange={handleInputChange} />
            </div>
            <button type="button" className="btn btn-primary w-100" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px' }} onClick={handleAddPost}>Add Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
