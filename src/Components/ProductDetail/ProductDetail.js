/**
 * Computer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, Card, CardImg, Button, Image } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-router-dom';


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
            return <p className="mt-5 text-center mb-0 h2" style={{ "font-weight": 600 }}>{parseFloat(x).toFixed(2) + " €"}</p>
        } else {
            return <p className="mt-5 text-center mb-0 h2" style={{ "font-weight": 600 }}>{parseFloat(x * (1 - y)).toFixed(2) + " €"}</p>
        }
    }


    calcPrice1(x, y) {
        if (parseFloat(x * (1 - y)).toFixed(2) !== parseFloat(x).toFixed(2)) {
            return <p className="text-center m-0 h4" style={{ "font-weight": 600, color: "red", height: "5rem" }}><s>{parseFloat(x).toFixed(2) + " €"}</s></p>
        } else {
            return <p className="text-center m-0 h4" style={{ "font-weight": 600, color: "red", height: "5rem" }}></p>
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
                <div key={index} className="w-75 bg-white mx-auto" style={{ "border-radius": "1rem" }}>
                    <div className="m-3 d-flex">
                        <div className="m-0 w-25">
                            <div className="p-2 w-100 h-75">
                                <img className="rounded img-fluid h-100 mx-auto d-block" src={element.image[0].image_1} alt={element.image[0].image_1} />
                            </div>
                            <div className="pt-2 w-100 h-25">
                                <img className="rounded img-fluid w-25" src={element.image[0].image_1} alt={element.image[0].image_1} />
                                <img className="rounded img-fluid w-25" src={element.image[0].image_2} alt={element.image[0].image_2} />
                                <img className="rounded img-fluid w-25" src={element.image[0].image_3} alt={element.image[0].image_3} />
                                <img className="rounded img-fluid w-25" src={element.image[0].image_4} alt={element.image[0].image_4} />
                            </div>
                        </div>
                        <div className="m-0 w-50">
                            <h1 className="m-0 mt-4 p-2 text-uppercase font-weight-bold h3">{element.brand}</h1>
                            <h2 className="m-0 mt-2 p-2 text-uppercase font-weight-bold h5">{element.name}</h2>
                            {Object.entries(element.resume).map(([key, value]) => (
                                <ul className="m-2 mt-3 list-group-flush" key={key}>
                                    {Object.entries(value).map(([name, data]) =>
                                        <li className="list-group-item" style={{ "line-height": "1rem", "font-size": "0.95rem" }} key={name}>{data}</li>
                                    )}
                                </ul>
                            ))}
                            <div className="rate text-center mt-3 h4" >
                                <Rater rating={element.rate} total={5} interactive={false} />
                            </div>
                        </div>
                        <div className="m-0 w-25">
                            <div className="m-0 h-50">
                                <p className="pt-5 text-center font-weight-bold h4" style={{ color: "red" }}>{element.message}</p>
                                {this.calcPrice2(element.price, element.discount)}
                                {this.calcPrice1(element.price, element.discount)}
                            </div>


                            <div className="m-0 h-25">
                                <div className="pt-5 text-center">
                                    <button className="btn btn-dark btn-filter" onClick={this.buttonClick} value={element._id}>Ajouter au panier</button>
                                </div>
                            </div>


                            <div className="m-0 h-25 w-50 d-flex mx-auto">
                                <button className="btn btn-dark btn-quantity">-</button>
                                <input className="" style={{ width: "5rem", height: "2rem", "border-radius": "2rem" }} type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                <button className="btn btn-dark btn-quantity">+</button>
                            </div>


                        </div>
                    </div>
                    <div className="m-3 px-4 pt-3 pb-2 border-top">
                        <h3 className="font-weight-bold p-3 text-uppercase"><u>description</u></h3>
                        <div dangerouslySetInnerHTML={{ __html: element.test }} />
                    </div>
                    <div className="m-3 px-4 pt-3 pb-2 border-top">
                        <h3 className="font-weight-bold p-3 text-uppercase"><u>caractéristiques</u></h3>
                        {Object.entries(element.detail).map(([key, value]) => (
                            <ul className="list-group" key={key}>
                                {Object.entries(value).map(([name, data]) =>
                                    <li className="list-group-item border-0 py-1" vkey={name} >{name} : {data}</li>
                                )}
                            </ul>
                        ))}
                    </div>
                </div >
            );
        });
        return product;
    };

    render() {
        return (
            <div fluid>
                <div>
                    {this.displayBreadcrumb()}
                </div>
                <div className="mt-4">
                    {this.displayProduct()}
                </div>
            </div>
        );
    }
}

/* Export */
export default ProductDetail;