import Head from 'next/head';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Medinova - Your Health Blog</title>
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

      {/* Topbar Start */}
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href=""><i className="bi bi-telephone me-2"></i>+012 345 6789</a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href=""><i className="bi bi-envelope me-2"></i>info@medinova.com</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link href="/" passHref>
              <h1 className="navbar-brand m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link href="/" passHref>
                  <span className="nav-item nav-link">Home</span>
                </Link>
                <Link href="/about" passHref>
                  <span className="nav-item nav-link">About</span>
                </Link>
                <Link href="/service" passHref>
                  <span className="nav-item nav-link">Service</span>
                </Link>
                <Link href="/price" passHref>
                  <span className="nav-item nav-link">Pricing</span>
                </Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0">
                    <Link href="/blog" passHref>
                      <span className="dropdown-item active">Blog Grid</span>
                    </Link>
                    <Link href="/detail" passHref>
                      <span className="dropdown-item">Blog Detail</span>
                    </Link>
                    <Link href="/team" passHref>
                      <span className="dropdown-item">The Team</span>
                    </Link>
                    <Link href="/testimonial" passHref>
                      <span className="dropdown-item">Testimonial</span>
                    </Link>
                    <Link href="/appointment" passHref>
                      <span className="dropdown-item">Appointment</span>
                    </Link>
                    <Link href="/search" passHref>
                      <span className="dropdown-item">Search</span>
                    </Link>
                  </div>
                </div>
                <Link href="/contact" passHref>
                  <span className="nav-item nav-link">Contact</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Blog Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
          </div>
          <div className="row g-5">
            {/* Example Blog Post Item */}
            {['Understanding the Ageing Population', 'Raising Cancer Awareness', 'Combatting Infectious Diseases'].map((title, idx) => (
              <div className="col-xl-4 col-lg-6" key={idx}>
                <Link href={`/detail?post=${idx + 1}`} passHref>
                  <div className="bg-light rounded overflow-hidden text-decoration-none">
                    <img className="img-fluid w-100" src={`img/blog-${idx + 1}.jpg`} alt={title} />
                    <div className="p-4">
                      <h3 className="d-block mb-3">{title}</h3>
                      <p className="m-0">Short description about the blog post goes here.</p>
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
                  </div>
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

      {/* Footer Start */}
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
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <Link href="#" passHref>
                  <span className="text-light mb-2"><i className="fa fa-angle-right me-2"></i>Home</span>
                </Link>
                <Link href="#" passHref>
                  <span className="text-light mb-2"><i className="fa fa-angle-right me-2"></i>About Us</span>
                </Link>
                <Link href="#" passHref>
                  <span className="text-light mb-2"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                </Link>
                <Link href="#" passHref>
                  <span className="text-light mb-2"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                </Link>
                <Link href="#" passHref>
                  <span className="text-light mb-2"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                </Link>
                <Link href="#" passHref>
                  <span className="text-light"><i className="fa fa-angle-right me-2"></i>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default BlogPage;