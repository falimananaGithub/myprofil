import React from 'react';
import Search from '../../components/search/Search';
import CardPortfolio from '../../components/card-portfolio/CardPortfolio';
import { Carousel, Image, Row, Col, Card, Container, NavLink } from 'react-bootstrap';
const Portfolio = () => {
    return (
        <section id='portfolio' className='section-container section-portfolio'>
            <Container className="">
                <div className='text-center'>
                    <h2>Mon projet disponible</h2>
                </div>
                <div className='text-center'>
                    <Search></Search>
                </div>
                <div >
                    <Row>
                        <Col lg={4} md={12}>
                            <CardPortfolio title="Mon profile" framework="ReactJs" description="just test"></CardPortfolio>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    );
};

export default Portfolio;