import Head from 'next/head';

const BlogPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Medinova - Your Health Blog</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Medical Blog, Health, Wellness" name="keywords" />
        <meta content="Stay updated with the latest health tips, medical news, and wellness advice." name="description" />
        <link href="img/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
      </Head>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <span className="text-body pe-3"><i className="bi bi-telephone me-2"></i>+012 345 6789</span>
                <span className="text-body">|</span>
                <span className="text-body px-3"><i className="bi bi-envelope me-2"></i>info@medinova.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
          </nav>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
          </div>
          <div className="row g-5">
            {['Understanding the Ageing Population', 'Raising Cancer Awareness', 'Combatting Infectious Diseases'].map((title, idx) => (
              <div className="col-xl-4 col-lg-6" key={idx}>
                <div className="bg-light rounded overflow-hidden text-decoration-none">
                  <img className="img-fluid w-100" src={`img/blog-${idx + 1}.jpg`} alt={title} />
                  <div className="p-4">
                    <h3 className="d-block mb-3">{title}</h3>
                    <p className="m-0">Short description about the blog post goes here.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
              <p className="mb-4">We are here to help you with your health needs. Reach out to us anytime!</p>
              <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Health St, Wellness City, USA</p>
              <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@medinova.com</p>
              <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
