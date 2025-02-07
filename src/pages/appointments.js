import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Appointments = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            time: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            date: Yup.date().required('Required'),
            time: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            axios.post('/api/appointments', values)
                .then(response => {
                    alert('Appointment scheduled successfully');
                })
                .catch(error => {
                    alert('Error scheduling appointment');
                });
        },
    });

    return (
        <div>
            <Header />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Schedule an Appointment
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="Date"
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        id="time"
                        name="time"
                        label="Time"
                        type="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        error={formik.touched.time && Boolean(formik.errors.time)}
                        helperText={formik.touched.time && formik.errors.time}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button color="primary" variant="contained" type="submit">
                        Schedule
                    </Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
};

export default Appointments;