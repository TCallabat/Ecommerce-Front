/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import ProductItems from "../ProductList/ProductItems";
import { Container, Row, Col } from 'react-bootstrap';


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


    displayTitle = (e) => {
        if (e === "new") { return "nouveaux produits" }
        if (e === "top") { return "top des ventes" }
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
            <div fluid className="mt-4">
                <div className="text-center text-uppercase" style={{ "text-shadow": "1.5px 1.5px rgba(0, 0, 0, 0.25)" }}>
                    <h1><u>{this.displayTitle(this.props.filter)}</u> </h1>
                </div>
                <div className="d-flex flex-wrap">
                    {this.displayProducts()}
                </div>
            </div>
        );
    }
}

/* Export */
export default ProductHomeNew;