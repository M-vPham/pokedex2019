import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OpeningPage extends Component {
    render() {
        return(
            <Router>
                <div className="opening buttons">
                    <Link to="./directoryPage.js"> All</Link>
                    <p>Was this linked?</p>
                </div>
                <div className="opening buttons">
                    <Link to="./filterPage.js"> Filter</Link>
                </div>
                <div className="opening buttons">
                    TeamBuilder
                </div>
            </Router>
        );
    }
}

export default OpeningPage;
