import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PatientInformation = () => {
    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Patient Information
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to our hospital. Here you will find all the information you need about our admission procedures, patient rights and responsibilities, insurance information, and billing.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Admission Procedures
                </Typography>
                <Typography variant="body1" paragraph>
                    Our admission process is designed to be as smooth and efficient as possible. Please bring a valid ID and your insurance information when you come to the hospital.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Patient Rights and Responsibilities
                </Typography>
                <Typography variant="body1" paragraph>
                    As a patient, you have the right to receive high-quality medical care and to be treated with respect and dignity. You also have the responsibility to provide accurate information about your health and to follow the treatment plan prescribed by your doctors.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Insurance Information
                </Typography>
                <Typography variant="body1" paragraph>
                    We accept a wide range of insurance plans. Please contact our billing department for more information about your specific insurance coverage.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Billing
                </Typography>
                <Typography variant="body1" paragraph>
                    Our billing department is here to assist you with any questions or concerns you may have about your medical bills. Please contact us if you need assistance.
                </Typography>
            </Container>
            <Footer />
        </div>
    );
};

export default PatientInformation;