/**
 * Header.js => OK
 */

/* Import */
import React, { Component } from "react";
import { Link } from 'react-router-dom';

/* Style */
import "./Header.css";

/* Component */
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-item1">
                    <li className="navbar-list2"><Link to="/"><img className="navbar-img" src="./img/home.svg" alt="home" /></Link></li>
                    <li className="navbar-list1"><Link to="/products/computer" className="navbar-link">Ordinateur</Link></li>
                    <li className="navbar-list1"><Link to="/products/phone" className="navbar-link">Téléphonie</Link></li>
                </ul>
                <ul className="navbar-item2" >
                    <li className="navbar-list2"><Link to="/user"><img className="navbar-img" src="./img/user.svg" alt="user" /></Link></li>
                    <li className="navbar-list2"><Link to="/shop"><img className="navbar-img" src="./img/card.svg" alt="card" /></Link></li>
                </ul>
            </div >
        );
    }
}

/* Export */
export default Header;