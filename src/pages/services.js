import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
    const services = [
        { name: 'Cardiology', description: 'Heart-related treatments and procedures.' },
        { name: 'Neurology', description: 'Brain and nervous system treatments.' },
        { name: 'Orthopedics', description: 'Bone and joint treatments and surgeries.' },
        // Add more services as needed
    ];

    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Our Services
                </Typography>
                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper>
                                <Typography variant="h5" gutterBottom>
                                    {service.name}
                                </Typography>
                                <Typography variant="body1">
                                    {service.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Services;