import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Menu extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about-me">About Me</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}