import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, TextField } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/doctors')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error fetching doctors:', error);
            });
    }, []);

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Our Doctors
                </Typography>
                <TextField
                    fullWidth
                    label="Search Doctors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Grid container spacing={3}>
                    {filteredDoctors.map(doctor => (
                        <Grid item key={doctor.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{doctor.name}</Typography>
                                    <Typography color="textSecondary">{doctor.specialty}</Typography>
                                    <Typography>{doctor.bio}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Doctors;