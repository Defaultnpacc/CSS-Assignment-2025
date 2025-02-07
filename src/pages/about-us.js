import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Our hospital has been providing excellent healthcare services since its inception. We are dedicated to offering high-quality medical care and ensuring the well-being of our patients.
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to provide compassionate and comprehensive healthcare to the community. Our team of experienced doctors, nurses, and staff are committed to delivering the best possible care to our patients.
                </Typography>
            </Container>
            <Footer />
        </div>
    );
};

export default AboutUs;