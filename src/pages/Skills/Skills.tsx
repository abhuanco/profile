import {Component} from "react";
import './Skills.scss'

export class Skills extends Component {
    render() {
        return (
            <>
                <h1>My skills list:</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="bss-card-skill">
                                    <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}