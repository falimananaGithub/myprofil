import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import { Card, NavLink } from 'react-bootstrap';
const CardPortfolio = (props) => {
    return (
        <Card className='mt-5 card-wrap' >
            <Card.Img src="logo192.png" className="card-header-style" variant="top" />

            <Card.Header className='mt-2 '>
                <Card.Title>
                    <label>{props.title}: {props.framework}</label>
                </Card.Title>

                <Card.Body>
                    <Card.Text>
                        <p>{props.description}</p>
                    </Card.Text>

                </Card.Body>

                <Card.Footer>
                    <div className='d-flex'><FaHandPointRight className='text-primary mt-1' /> &nbsp; &nbsp;<NavLink href="#" className='text-primary'> Voir le projet </NavLink></div>
                </Card.Footer>
            </Card.Header>
        </Card>

    );
};

export default CardPortfolio;