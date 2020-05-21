/**
 * App.js => OK
 */

/* Import */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Privacy from "../Components/Legal/Privacy";
import Cookies from "../Components/Legal/Cookies";
import Legal from "../Components/Legal/Legal";
import SalesPolicies from "../Components/Legal/SalesPolicies";
import Terms from "../Components/Legal/Terms";
import Sitemap from "../Components/Legal/Sitemap";
import ProductGrid from "../Components/ProductList/ProductGrid";
import ProductDetail from "../Components/ProductDetail/ProductDetail";


/* Component */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Component */
function App() {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/products/:family/:id" component={ProductDetail}></Route>
        <Route path="/products/:family" component={ProductGrid}></Route>
        <Route path="/legal/privacy" component={Privacy}></Route>
        <Route path="/legal/cookies" component={Cookies}></Route>
        <Route path="/legal/legal" component={Legal}></Route>
        <Route path="/legal/salespolicies" component={SalesPolicies}></Route>
        <Route path="/legal/terms" component={Terms}></Route>
        <Route path="/legal/sitemap" component={Sitemap}></Route>
      </Switch>

      <Footer />

    </Router>
  );
}

/* Export */
export default App;