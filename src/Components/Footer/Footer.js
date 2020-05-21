/**
 * Footer.js => OK
 */

/* Import */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* Style */
import "./Footer.css";

/* Component */
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink className="link" to="/legal/privacy">Engagement de confidentialité</NavLink>
                <NavLink className="link pipe" to="/legal/cookies">Utilisation des cookies</NavLink>
                <NavLink className="link pipe" to="/legal/terms">Conditions d’utilisation</NavLink>
                <NavLink className="link pipe" to="/legal/salespolicies">Ventes et remboursements</NavLink>
                <NavLink className="link pipe" to="/legal/legal">Mentions légales</NavLink>
                <NavLink className="link pipe" to="/legal/sitemap">Plan du site</NavLink>
            </div>
        );
    }
}

/* Export */
export default Footer;