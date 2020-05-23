/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import ProductItems from "./ProductItems";


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


    displayTitle = (e) => {
        const { family } = e;
        switch (family) {
            case "computer":
                return "ordinateurs";
            case "phone":
                return "téléphones";
            default:
                return
        }
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
            <div fluid className="mt-4">
                <div className="text-center text-uppercase" style={{ "text-shadow": "1.5px 1.5px rgba(0, 0, 0, 0.25)" }}>
                    <h1><u>{this.displayTitle(this.props.match.params)}</u> </h1>
                </div>
                <div className="text-center mt-3 mb-2">
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortPriceAscending}>prix -/+</button>
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortPriceDescending}>prix +/-</button>
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortBrandAscending}>marque a/z</button>
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortBrandDescending}>marque z-a</button>
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortRateAscending}>note -/+</button>
                    <button className="btn btn-light my-2 mx-3 py-1 px-0 btn-filter" onClick={this.sortRateDescending}>note +/-</button>
                </div>
                <div className="d-flex flex-wrap">
                    {this.displayProducts()}
                </div>
            </div>
        );
    }
}

/* Export */
export default ProductGrid;