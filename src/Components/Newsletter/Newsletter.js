/**
 * Newsletter.js => OK
 */

/* Import */
import React, { Component } from 'react';

/* Style */
import "./Newsletter.css"

/* Component */
class Newsletter extends Component {
    render() {
        return (
            <div className="Newsletter-container">
                <div className="Newsletter-part1">
                    <h2 className="Newsletter-title">Restez informés</h2>
                    <p className="Newsletter-text">Abonnez-vous à notre newsletter et soyez averti en avant-première de nos nouveautés, de nos bons plans et de nos ventes flash !</p>
                    <p className="Newsletter-text">Recevez nos conseils pour vous équiper et vous occuper à la maison. Découvrez, en exclusivité, nos offres très privées spécialement réservées à nos abonnés.</p>
                </div>
                <div className="Newsletter-part2">
                    <h2 className="Newsletter-title">Abonnez-vous à nos newsletters et surveillez votre boîte mail !</h2>
                    <form className="Newsletter-form" action="" method="post">
                        <input className="Newsletter-email" type="email" name="email" id="email" required />
                        <input className="Newsletter-button" type="submit" value="OK" />
                    </form>
                </div>
            </div>
        );
    }
}

/* Export */
export default Newsletter;