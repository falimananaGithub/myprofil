import React from 'react';
import { Image, Row, Col, Container, Nav, Stack } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className='bg-footer text-primary p-4'>
                    <Col md={12} lg={2} className='mx-5'>
                        <Stack className='margin-img-footer'>
                            <Image
                                src='/images/me.png'
                                alt=''
                                width={50}
                                height={50}
                            />
                            <h2>Rabemananjara</h2>
                            <p>Falimanana Stéphan</p>
                        </Stack>
                        <hr />
                    </Col>

                    <Col md={12} lg={2} className=''>

                        <div><Image src='/images/telma.png' width={30} height={30}></Image><label> +261 34 25 419 37</label></div>
                        <hr />
                        <div><Image src='/images/airtel.png' width={30} height={30}></Image> <label> +261 33 73 490 71</label></div>
                        <hr />
                        <div><Image src='/images/orange.jpeg' width={30} height={30}></Image> <label> +261 32 92 129 96</label></div>
                        <hr />
                    </Col>
                    <Col md={12} lg={4} className=''>
                        <div> <strong  ><IoIosMail /> : </strong><label> rabemananjarafalimananastephan@gmail.com</label></div>
                        <hr />
                        <div> <strong ><IoIosMail /> : </strong><label> Stéphan Rabemananjara</label></div>
                        <hr />
                        <div> <strong ><FaWhatsapp /> : </strong><label> +261 34 25 419 37</label></div>
                        <hr />

                    </Col>
                    <Col md={12} lg={2} className=''>

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