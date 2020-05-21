/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, Card, CardImg, Button } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-router-dom';

import "./ProductDetail.css"

/* Component */
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params !== prevProps.match.params) {
            this.fetchData()
        }
    }

    fetchData = () => {
        let { family, id } = this.props.match.params;
        fetch(`http://localhost:8080/products/${family}/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        })
            .then((response) => response.json())
            .then(
                (data) => this.setState({ data }),
                (error => console.log(error)));
    }

    calcPrice2(x, y) {
        if (parseFloat(x * (1 - y)).toFixed(2) === parseFloat(x).toFixed(2)) {
            return <p className="price_2">{parseFloat(x).toFixed(2) + " €"}</p>
        } else {
            return <p className="price_2">{parseFloat(x * (1 - y)).toFixed(2) + " €"}</p>
        }
    }

    calcPrice1(x, y) {
        if (parseFloat(x * (1 - y)).toFixed(2) !== parseFloat(x).toFixed(2)) {
            return <p className="price_1">{parseFloat(x).toFixed(2) + " €"}</p>
        } else {
            return <p className="price_1"></p>
        }
    };

    buttonClick = (e) => {
        window.alert("ajouter au panier\nid : " + e.target.value);
    };


    displayBreadcrumb = () => {
        let breadcrumb = this.state.data.map((element, index) => {
            return (
                <div key={index} >
                    <Breadcrumb>
                        <Breadcrumb.Item active>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item active>{element.family}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{element.category}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{element.brand}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{element.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            )
        });
        return breadcrumb;
    };

    displayProduct = () => {
        let product = this.state.data.map((element, index) => {
            return (
                <div key={index} className="product_detail">
                    <Row className="detail_row">
                        <Col className="card_left">
                            <Card.Img className="img" src={element.image[0].image_1} alt={element.image[0].image_1} />
                        </Col>
                        <Col className="card_center">
                            <Card.Title className="brand">{element.brand}</Card.Title>
                            <Card.Text className="name">{element.name}</Card.Text>
                            {Object.entries(element.resume).map(([key, value]) => (
                                <ul className="list" key={key}>
                                    {Object.entries(value).map(([name, data]) =>
                                        <li className="li" key={name}>{data}</li>
                                    )}
                                </ul>
                            ))}
                            <div className="rate" >
                                <Rater rating={element.rate} total={5} interactive={false} />
                            </div>
                        </Col>
                        <Col className="card_right" >
                            {this.calcPrice2(element.price, element.discount)}
                            {this.calcPrice1(element.price, element.discount)}
                            <p className="message">{element.message} </p>
                            <Col className="button">
                                <Button onClick={this.buttonClick} variant="dark" value={element._id}>Ajouter au panier</Button>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="detail_row">
                        <Col>
                            {Object.entries(element.description).map(([key, value]) => (
                                <ul key={key}>
                                    {Object.entries(value).map(([name, data]) =>
                                        <li key={name}>{name} : {data}</li>
                                    )}
                                </ul>
                            ))}
                        </Col>
                    </Row>
                    <Row className="detail_row">
                        <Col>
                            {Object.entries(element.detail).map(([key, value]) => (
                                <ul key={key}>
                                    {Object.entries(value).map(([name, data]) =>
                                        <li key={name} >{name} : {data}</li>
                                    )}
                                </ul>
                            ))}
                        </Col>
                    </Row>

                </div>
            );
        });
        return product;
    };

    render() {
        return (
            <Container fluid className="product_detail_container">
                <Row>
                    <Col>
                        {this.displayBreadcrumb()}
                    </Col>
                </Row>
                <Row>
                    <Col className="product_detail_content">
                        {this.displayProduct()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

/* Export */
export default ProductDetail;