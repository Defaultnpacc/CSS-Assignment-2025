import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Link from 'next/link';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Hospital Website
                </Typography>
                <Link href="/" passHref><Button color="inherit">Home</Button></Link>
                <Link href="/about-us" passHref><Button color="inherit">About Us</Button></Link>
                <Link href="/services" passHref><Button color="inherit">Services</Button></Link>
                <Link href="/doctors" passHref><Button color="inherit">Doctors</Button></Link>
                <Link href="/contact-us" passHref><Button color="inherit">Contact Us</Button></Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;