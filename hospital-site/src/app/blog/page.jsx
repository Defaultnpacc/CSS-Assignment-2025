import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    { title: 'Understanding the Ageing Population', description: 'Short description about the blog post goes here.', img: 'img/blog-1.jpg' },
    { title: 'Raising Cancer Awareness', description: 'Short description about the blog post goes here.', img: 'img/blog-2.jpg' },
    { title: 'Combatting Infectious Diseases', description: 'Short description about the blog post goes here.', img: 'img/blog-3.jpg' }
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
      <Head>
        <meta charSet="utf-8" />
        <title>KYS General Hospital - Your Health Blog</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Medical Blog, Health, Wellness" name="keywords" />
        <meta content="Stay updated with the latest health tips, medical news, and wellness advice." name="description" />
        
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
      </Head>

      {/* Blog Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
          </div>
          <div className="row g-5">
            {/* Example Blog Post Item */}
            {posts.map((post, idx) => (
              <div className="col-xl-4 col-lg-6" key={idx}>
                <Link href={`/detail?post=${idx + 1}`} passHref>
                  <a className="bg-light rounded overflow-hidden text-decoration-none">
                    <img className="img-fluid w-100" src={post.img} alt={post.title} />
                    <div className="p-4">
                      <h3 className="d-block mb-3">{post.title}</h3>
                      <p className="m-0">{post.description}</p>
                    </div>
                    <div className="d-flex justify-content-between border-top p-4">
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt="" />
                        <small>Dr. Jane Smith</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>1,234</small>
                        <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>45</small>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
            <div className="col-12 text-center">
              <button className="btn btn-primary py-3 px-5">Load More</button>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Add New Blog Post Form */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Add New Blog Post</h5>
          </div>
          <div className="row g-5">
            <div className="col-12">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" name="title" value={newPost.title} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" name="description" rows="3" value={newPost.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">Image URL</label>
                  <input type="text" className="form-control" id="img" name="img" value={newPost.img} onChange={handleInputChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleAddPost}>Add Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Add New Blog Post Form End */}
    </>
  );
};

export default BlogPage;