/**
 * Cookies.js => OK
 */

/* Import */
import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/* Style */
import "./ProductItems.css"

/* Component */
class ProductItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price_1: 0,
            price_2: 0,
        };
    };

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

    productClick = (e) => {
        window.alert("afficher produit\nid : " + e.target.value);
    };

    buttonClick = (e) => {
        window.alert("ajouter au panier\nid : " + e.target.value);
    };

    render() {
        return (
            <div className="product_container_s">
                <Col className="card_left">
                    <Card.Img className="img" src={this.props.image[0].image_1} alt={this.props.image[0].image_1} />
                </Col>
                <Col className="card_center">
                    <Card.Title className="brand">{this.props.brand}</Card.Title>
                    <Card.Text className="name">{this.props.name}</Card.Text>
                    {Object.entries(this.props.resume).map(([key, value]) => (
                        <ul className="list" key={key}>
                            {Object.entries(value).map(([name, data]) =>
                                <li className="li" key={name}>{data}</li>
                            )}
                        </ul>
                    ))}
                    <div className="rate" >
                        <Rater rating={this.props.rate} total={5} interactive={false} />
                    </div>
                </Col>
                <Col className="card_right" >
                    {this.calcPrice2(this.props.price, this.props.discount)}
                    {this.calcPrice1(this.props.price, this.props.discount)}
                    <p className="message">{this.props.message} </p>
                    <Col className="button">
                        <Button onClick={this.buttonClick} variant="dark" value={this.props.id}>Ajouter au panier</Button>
                        <Link to={`/products/${this.props.family}/${this.props.id}`}>
                            <Button variant="dark" value={this.props.id}>Voir détail</Button>
                        </Link>
                    </Col>
                </Col>
            </div>
        );
    }
}

export default ProductItems