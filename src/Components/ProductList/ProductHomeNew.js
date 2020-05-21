/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import ProductItems from "../ProductList/ProductItems";
import { Container, Row, Col } from 'react-bootstrap';

/* Style */
import "../ProductList/ProductGrid.css";

/* Component */
class ProductHomeNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch(`http://localhost:8080/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        })
            .then((response) => response.json())
            .then(
                (data) => this.setState({ data }),
                (error) => console.log(error));
    }

    displayTitle = (element) => {
        const filter = element;
        if (filter === "new") { return <h1 className="product_grid_title">Nouveaux produits</h1> }
        if (filter === "top") { return <h1 className="product_grid_title">Top des ventes</h1> }
    }

    displayProducts = () => {
        let products = this.state.data
            .filter((opt) => opt.filter === this.props.filter)
            .map((element, index) => {
                return (<ProductItems
                    key={index}
                    id={element._id.toString()}
                    family={element.family}
                    category={element.category}
                    brand={element.brand}
                    name={element.name}
                    price={element.price}
                    discount={element.discount}
                    message={element.message}
                    rate={element.rate}
                    resume={element.resume}
                    description={element.description}
                    detail={element.detail}
                    image={element.image}
                />);
            });
        return products;
    };

    render() {
        return (
            <Container fluid className="product_grid_container">
                <Row>
                    <Col>
                        {this.displayTitle(this.props.filter)}
                    </Col>
                </Row>
                <Row>
                    <Col className="product_grid_content">
                        {this.displayProducts()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

/* Export */
export default ProductHomeNew;