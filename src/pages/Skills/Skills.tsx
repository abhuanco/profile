import {Component} from "react";
import './Skills.scss'

export class Skills extends Component {
    render() {
        return (
            <>
                <h1>My skills list:</h1>
                <ul className="list-group-horizontal">
                    <li>PHP</li>
                    <li>NodeJS</li>
                    <li>React</li>
                    <li>Angular</li>
                </ul>
            </>
        )
    }
}