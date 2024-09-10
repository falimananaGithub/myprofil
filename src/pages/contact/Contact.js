import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import FormText from '../../components/form/FormText';
const Contact = () => {
    return (
        <section id='contact' className='section-container'>

            <div className='text-center mt-5'>
                <h2>Envoyer un e-mail</h2>
            </div>
            <div className='mt-4 bg-form style-send pb-3'>
                <Container>
                    <FormText></FormText>
                </Container>
            </div>
            <Row>
                <Col></Col>
            </Row>


        </section>
    );
};

export default Contact;