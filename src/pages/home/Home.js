import { useState } from 'react';
import { Carousel, Image, Row, Col, Card, Container, NavLink } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import dataCarousel from '../../components/data-carousel/data';
//import HomeAnnimate from '../../components/annimations/HomeAnnimate';
import AnotherAnimation from '../../components/annimations/AnotherAnimation';

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="home" className='mt-5'>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <Card className='mt-5 my-card'>
                            <div className="flex-container">
                                <Card.Img src="images/me.png" className="card-img-me" />
                                <div className='my-name'>
                                    <div className='h5'>Rabemananjara Falimanana Stéphan</div>
                                </div>
                            </div>
                            <Card.Header className='mt-2'>
                                <Card.Title>
                                    <label>Information personnel</label>
                                </Card.Title>

                                <Card.Body>
                                    <div className=''>
                                        <div><strong><BsTelephoneFill className='text-primary' /> :</strong> <label> +261 34 25 419 37</label></div>
                                        <hr />
                                        <div> <strong ><IoIosMail className='text-primary' /> : </strong><label> rabemananjarafalimananastephan@gmail.com</label></div>
                                        <hr />
                                        <div><strong><FaLocationDot className='text-primary' /> : </strong><label> Cité Ambohipo bloc-34 </label></div>

                                    </div>

                                </Card.Body>

                                <Card.Footer>
                                    <div className='d-flex'><FaHandPointRight className='text-primary mt-1' /> &nbsp; &nbsp;<NavLink href={`${process.env.PUBLIC_URL}/files/cv_rabemananjara_original.pdf`} className='text-primary' download="cv.pdf"> Télécharger mon CV ici </NavLink></div>
                                </Card.Footer>
                            </Card.Header>
                        </Card>

                    </Col>
                    <Col lg={6} md={12}>
                        <div className='view-carousel mt-5'>
                            <Carousel activeIndex={index} onSelect={handleSelect} className="full-screen-carousel full-width-slide">

                                {dataCarousel.map((data) => {

                                    return (<Carousel.Item key={data.id}>
                                        <Image src={data.srcImage} style={{ minHeight: "55vh" }} text={data.text} className={data.classBorder1} />
                                        <Carousel.Caption>
                                            <h3 className='text-primary'>{data.label}</h3>
                                            <p>{data.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>)
                                })}


                            </Carousel>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className='mt-5'>
                <AnotherAnimation></AnotherAnimation>
            </div>

        </section>
    );
}

export default Home;