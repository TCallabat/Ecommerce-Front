/**
 * Cookies.js => OK
 */

/* Import */
import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-router-dom';


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
            return <p className="text-right pr-4 mt-4 mb-0" style={{ "font-weight": 600, "font-size": "1.25rem" }}>{parseFloat(x).toFixed(2) + " €"}</p>
        } else {
            return <p className="text-right pr-4 mt-4 mb-0" style={{ "font-weight": 600, "font-size": "1.25rem" }}>{parseFloat(x * (1 - y)).toFixed(2) + " €"}</p>
        }
    }


    calcPrice1(x, y) {
        if (parseFloat(x * (1 - y)).toFixed(2) !== parseFloat(x).toFixed(2)) {
            return <p className="text-right pr-4 m-0" style={{ "font-weight": 600, color: "red", height: "2rem" }}><s>{parseFloat(x).toFixed(2) + " €"}</s></p>
        } else {
            return <p className="text-right pr-4 m-0" style={{ "font-weight": 600, color: "red", height: "2rem" }}></p>
        }
    };


    buttonClick = (e) => {
        window.alert("ajouter au panier\nid : " + e.target.value);
    };


    render() {
        return (
            <div className="d-flex bg-white mx-auto my-3" style={{ "border-radius": "1rem", height: "15.5rem" }}>
                <div className="m-0 p-1" style={{ width: "15rem" }}>
                    <img className="img-fluid img" src={this.props.image[0].image_1} alt={this.props.image[0].image_1} />
                </div>
                <div className="m-0 p-0 card_center" style={{ width: "30rem" }}>
                    <h1 className="m-0 text-uppercase font-weight-bold pl-3 pt-1" style={{ "line-height": "2rem", "font-size": "1.25rem" }}>{this.props.brand}</h1>
                    <h2 className="m-0 text-uppercase font-weight-bold pl-3" style={{ "line-height": "2rem", "font-size": "0.90rem" }}>{this.props.name}</h2>
                    {Object.entries(this.props.resume).map(([key, value]) => (
                        <ul className="m-0 list-group-flush" key={key}>
                            {Object.entries(value).map(([name, data]) =>
                                <li className="list-group-item p-0 mr-3 text-justify" style={{ "line-height": "1.125rem", "font-size": "0.875rem" }} key={name}>{data}</li>
                            )}
                        </ul>
                    ))}
                    <div className="m-0 p-0 h5 text-center" >
                        <Rater rating={this.props.rate} total={5} interactive={false} />
                    </div>
                </div>
                <div className="m-0 p-0 card_right" style={{ width: "10rem" }}>
                    {this.calcPrice2(this.props.price, this.props.discount)}
                    {this.calcPrice1(this.props.price, this.props.discount)}
                    <p className="my-1 p-1 text-center text-uppercase font-weight-bold" style={{ color: "red", "font-size": "0.95rem" }}>{this.props.message} </p>
                    <div className="mt-1 text-center">
                        <button className="btn btn-light my-2 py-1 px-0 btn-small" value={this.props.id} onClick={this.buttonClick}>Ajouter au panier</button>
                        <Link to={`/products/${this.props.family}/${this.props.id}`}>
                            <button className="btn btn-light my-2 py-1 px-0 btn-small" value={this.props.id}>Voir détail</button>
                        </Link>
                    </div>
                </div>
            </div >
        );
    }
}

export default ProductItems
