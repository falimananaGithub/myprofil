import React, { useState } from 'react';
import Search from '../../components/search/Search';
import CardPortfolio from '../../components/card-portfolio/CardPortfolio';
import { Carousel, Image, Row, Col, Card, Container, NavLink } from 'react-bootstrap';
const Portfolio = () => {
    const [search, setSearch] = useState("");
    const [isExist, setIsExist] = useState(true);

    const dataStatic = [
        {
            id: 1,
            title: "Site web mon profil",
            description: "Dans ce site, vous verrez mon cv ainsi que mon portfolio",
            framework: "ReactJs",
            url_image: "logo192.png",
            url_git: "",
            url_site: ""

        },
        {
            id: 2,
            title: "API expressJs",
            description: "C'est une simulation d'API en Node.js. Vous verrez des 'endpoints' tels que CREATE, GET, UPDATE et DELETE dans ce mini-projet",
            framework: "ExpressJS",
            url_image: "express.png",
            url_git: "",
            url_site: ""

        },
        {
            id: 3,
            title: "Login et dashboard en flutter",
            description: "Grâce à ce mini-projet, je découvert les notions de base flutter ansi que le langage dart ",
            framework: "Flutter",
            url_image: "flutter.png",
            url_git: "",
            url_site: ""

        }

    ];


    const filteredData = dataStatic.filter((item) => {
        return search.toLocaleLowerCase() === ""
            ? " "
            : item.title.toLocaleLowerCase().includes(search);
    });



    return (
        <section id='portfolio' className='section-container section-portfolio'>
            <Container className="">
                <div className='text-center'>
                    <h2>Mes projets disponible</h2>
                </div>
                <div className='text-center'>
                    <Search setSearch={setSearch} ></Search>
                </div>
                <div className='text-center'>
                    <Row>

                        {
                            filteredData.length != 0 ?
                                filteredData.map((data) => (

                                    <Col lg={4} md={12} key={data.id.toString()}>
                                        <CardPortfolio title={data.title} framework={data.framework} description={data.description} img={data.url_image}></CardPortfolio>
                                    </Col>)

                                ) :
                                (
                                    <p className='text-danger text-center mt-5'>Aucun projet trouvé</p>
                                )
                        }

                    </Row>

                </div>
            </Container>
        </section>
    );
};

export default Portfolio;