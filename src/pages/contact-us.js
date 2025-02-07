import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Button color="primary" variant="contained" type="submit">
                        Send
                    </Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
};

export default ContactUs;