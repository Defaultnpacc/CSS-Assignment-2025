import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Welcome to Our Hospital
                </Typography>
                <Typography variant="h6" gutterBottom>
                    We provide the best healthcare services.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper>
                            <Typography variant="h5" gutterBottom>
                                Our Services
                            </Typography>
                            <Typography variant="body1">
                                We offer a wide range of medical services to meet your needs.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper>
                            <Typography variant="h5" gutterBottom>
                                Our Doctors
                            </Typography>
                            <Typography variant="body1">
                                Meet our team of experienced and dedicated doctors.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper>
                            <Typography variant="h5" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1">
                                Get in touch with us for any inquiries or appointments.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;