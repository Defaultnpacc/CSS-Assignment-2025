import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Importing OwlCarousel CSS
import 'owl.carousel'; // Importing OwlCarousel JS

export const Testimonials = () => {
    // Testimonials data
    const testimonials = [
        {
            name: "Ethan",
            role: "Student",
            text: "Recovered just in time for my exams! Really thankful for all the care and attention I've received by the staff.",
            img: "/img/testimonial-1.jpg"
        },
        {
            name: "Damien",
            role: "Stripper",
            text: "Warded for 3 days and the care was excellent. Yes, there's a long waiting time for a ward, but the nurses provided the same care everywhere. Couldn't be more pleased with the healthcare I received.",
            img: "/img/testimonial-2.jpg"
        },
        {
            name: "Ryan",
            role: "Lecturer",
            text: "I have only been met with warmth, kindness and patience from the point I passed my referral letter to the registration counter, to the doctor's consultation, to medicine collection and payment.",
            img: "/img/testimonial-3.jpg"
        }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                    <h1 className="display-4">What Patients Say About Our Services</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <OwlCarousel className="testimonial-carousel" items={1} autoplay loop nav>
                            {testimonials.map((testimonial, index) => (
                                <div className="testimonial-item text-center" key={index}>
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle mx-auto" src={testimonial.img} alt={testimonial.name} />
                                        <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
                                            <i className="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <p className="fs-4 fw-normal">{testimonial.text}</p>
                                    <hr className="w-25 mx-auto" />
                                    <h3>{testimonial.name}</h3>
                                    <h6 className="fw-normal text-primary mb-3">{testimonial.role}</h6>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};