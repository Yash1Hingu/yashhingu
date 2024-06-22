import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const InputLabelProps = {
    style: {
        color: 'white'
    }
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const submissionStatus = localStorage.getItem('isSubmitted');
        if (submissionStatus) {
            setIsSubmitted(true);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_egwwx7m',
            'template_npjqdaw',
            formData,
            'ocrJ7MxO017BC-ZDX'
        ).then(() => {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
            localStorage.setItem('isSubmitted', true);
            setIsSubmitted(true);
        }).catch(error => {
            console.error('Failed to send email:', error);
        });
    };

    return (
        <div className="contact_container">
            {isSubmitted ? (
                <Typography variant="h4" component="h3">
                    Thank you for contacting us!
                </Typography>
            ) : (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mx: 'auto',
                        width: '80%'
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontSize: '4rem',
                            backgroundColor: 'var(--dark-mode)',
                            backgroundImage: 'var(--gradient-heading)',
                            animation: 'texthover .5s ease',
                            WebkitBackgroundClip: 'text',
                            MozBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            MozTextFillColor: 'transparent',
                            textDecoration: 'none'
                        }}
                    >
                        Contact Me
                    </Typography>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={InputLabelProps}
                        InputProps={InputLabelProps}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={InputLabelProps}
                        InputProps={InputLabelProps}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={InputLabelProps}
                        InputProps={InputLabelProps}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            width: '100%',
                            padding: '1.2rem',
                            color: 'white',
                            fontWeight: '600'
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            )}
        </div>
    );
}
