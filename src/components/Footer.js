import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="lg">
                <Typography variant="body2" color="textSecondary" align="center">
                    {'© '}
                    <Link color="inherit" href="https://your-hospital-website.com/">
                        Your Hospital
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;