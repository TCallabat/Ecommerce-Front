/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import ProductItems from "./ProductItems";
import { Container, Row, Col, Button } from 'react-bootstrap';

/* Style */
import "./ProductGrid.css";

/* Component */
class ProductGrid extends Component {
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
        let { family } = this.props.match.params;
        fetch(`http://localhost:8080/products/${family}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        })
            .then((response) => response.json())
            .then(
                //(data) => this.setState({ data: data.filter(function (data) { return data.family === family }) }),
                (data) => this.setState({ data }),
                (error) => console.log(error));
    }

    sortPriceAscending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.price < b.price) return -1;
            else if (a.price > b.price) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    sortPriceDescending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.price > b.price) return -1;
            else if (a.price < b.price) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    sortBrandAscending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.brand < b.brand) return -1;
            else if (a.brand > b.brand) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    sortBrandDescending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.brand > b.brand) return -1;
            else if (a.brand < b.brand) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    sortRateAscending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.rate < b.rate) return -1;
            else if (a.rate > b.rate) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    sortRateDescending = () => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a.rate > b.rate) return -1;
            else if (a.rate < b.rate) return 1;
            return 0;
        });
        this.setState({ data: sort })
    }

    displayTitle = () => {
        const { family } = this.props.match.params;
        if (family === "computer") { return <h1 className="product_grid_title">ordinateurs</h1> }
        if (family === "phone") { return <h1 className="product_grid_title">telephones</h1> }
    }

    displayProducts = () => {
        let products = this.state.data.map((element, index) => {
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
                        {this.displayTitle()}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button className="product_grid_button" variant="dark" onClick={this.sortPriceAscending}>prix -/+</Button>
                        <Button className="product_grid_button" variant="dark" onClick={this.sortPriceDescending}>prix +/-</Button>
                        <Button className="product_grid_button" variant="dark" onClick={this.sortBrandAscending}>marque a/z</Button>
                        <Button className="product_grid_button" variant="dark" onClick={this.sortBrandDescending}>marque z-a</Button>
                        <Button className="product_grid_button" variant="dark" onClick={this.sortRateAscending}>note -/+</Button>
                        <Button className="product_grid_button" variant="dark" onClick={this.sortRateDescending}>note +/-</Button>
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
export default ProductGrid;