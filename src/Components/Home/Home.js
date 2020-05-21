/**
 * Home.js => OK
 */

/* Import */
import React, { Component } from 'react';
import Caroussel from "../../Components/Carousel/Caroussel";
import Newsletter from "../../Components/Newsletter/Newsletter";
import ProductHomeNew from "../ProductList/ProductHomeNew";

/* Component */
class Home extends Component {
    render() {
        return (
            <div>
                <Caroussel />
                <ProductHomeNew filter={"new"} />
                <Newsletter />
                <ProductHomeNew filter={"top"} />
            </div>
        );
    }
}

/* Export */
export default Home;