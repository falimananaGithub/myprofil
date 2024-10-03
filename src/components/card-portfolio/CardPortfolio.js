import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import { Card, NavLink } from 'react-bootstrap';
const CardPortfolio = (props) => {
    return (
        <Card className='mt-5 card-wrap card-width' >
            <Card.Img src={`images/${props.img}`} className="card-header-style" variant="top" width={50} />

            <Card.Header className='mt-2 '>
                <Card.Title className='card-title'>
                    <label>{props.title}: </label>
                    <p> {props.framework}</p>
                </Card.Title>

                <Card.Body>
                    <Card.Text className="text-card_portfolio">
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