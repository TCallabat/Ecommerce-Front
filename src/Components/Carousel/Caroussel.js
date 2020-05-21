/**
 * Caroussel.js => OK
 */

/* Import */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

/* Component */
class Caroussel extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel indicators={false} prevIcon={false} nextIcon={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/Carousel_1.png" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/Carousel_2.png" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./img/Carousel_3.png" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>


        );
    }
}

/* Export */
export default Caroussel;