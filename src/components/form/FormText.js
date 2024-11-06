// FormText.js

import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
const FormText = () => {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const validateEmail = (email) => {
        // Regular expression to validate email address
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const sendEmail = () => {
        setLoading(true);
        emailjs.send(
            'service_3osj92s',
            'template_9xa1wsw',
            {
                from_name: name,  // name's sender
                from_email: email, //mail's sender
                to_name: 'Stephan',  // name's recepient
                to_email: 'rabemananjarafalimananastephan@gmail.com',  // mail's recipient
                reply_to: email,
                message: message  // message from sender

            },

            'ILAUdgwTGGQYYgT4K')
            .then((result) => {
                setLoading(false);
                setSuccess("Votre messange a été bien envoyé")
            }, (error) => {
                setError("Erreur lors l'envoie du message, essayez plus tart!");
                setLoading(false);
            });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("L'adresse e-mail n'est pas valide.");
            return;
        }
        if (name.trim() === "" || message.trim() === "") {
            setError("Tous les champs sont obligatoires.");
            return;
        }
        setError(""); // Clear any existing errors
        sendEmail();
    };

    return (
        <div className="section-container">
            <Form onSubmit={handleSubmit} className="form-text section-container">
                <Row>
                    <Col lg={6} md={12}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nom:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nom"
                                value={name}
                                onChange={handleNameChange}
                                required
                                size="m"
                                className="bg-input"

                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                size="m"
                                className="bg-input"

                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                        <Form.Group controlId="formTextarea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Hello"
                                value={message}
                                onChange={handleMessageChange}
                                required
                                className="bg-input"

                            />
                        </Form.Group>

                    </Col>
                </Row>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <Button className="mt-3" variant="primary" type="submit">
                    {loading ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
            </Form>
        </div>
    );
};

export default FormText;
