import React from 'react';
import { Image, Row, Col, Container, Nav, Stack } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className='bg-footer text-primary p-4'>
                    <Col className='mx-5'>
                        <Stack>
                            <Image
                                src='/images/me.png'
                                alt=''
                                width={50}
                                height={50}
                            />
                            <h2>Rabemananjara</h2>
                            <p>Falimanana Stéphan</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className='flex-column fs-5'>
                            <h4>Naviguez</h4>
                            <Nav.Link href="#home" className='text-primary'>Home</Nav.Link>
                            <Nav.Link href="#portfolio" className='text-primary'>Portfolio</Nav.Link>
                            <Nav.Link href="#contact" className='text-primary'>Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className='text-primary'>
                        <h4>contactez moi!</h4>
                        <div><strong><BsTelephoneFill /> :</strong> <label> +261 34 25 419 37</label></div>
                        <hr />
                        <div> <strong ><IoIosMail /> : </strong><label> rabemananjarafalimananastephan@gmail.com</label></div>
                        <hr />
                        <div><strong><FaLocationDot /> : </strong><label> Cité Ambohipo bloc-34 </label></div>

                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <div className='bg-primary text-center text-white bo '>
                    <label>Copyright by Stéphan 2023</label>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;