import {Component} from "react";
import './Portfolio.scss'
import {Portfolio as ModelPortfolio} from "../../applications/models/Portfolio";

export class Portfolio extends Component {
    protected portfolios: ModelPortfolio[] = [];
    list = () => {
        this.portfolios = [
            new ModelPortfolio('', '', '', []),
        ];
    };

    render() {
        return (
            <>
                <div className="row g-2">
                    {this.portfolios.map((portfolio, index) => {
                            <div  className=" col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="card">
                                    <img src="" className="card-img-top" alt="Project"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            Dsecription website example what your offer
                                        </p>
                                        <div>
                                            <code>PHP</code>, <code>Prestashop</code>, <code>HTML</code>, <code>Javascript</code>
                                        </div>
                                        <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        })}

                    {/*<div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="https://picsum.photos/id/1/500/300" className="card-img-top" alt="Project"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="https://picsum.photos/id/1/500/300" className="card-img-top" alt="Project"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </>
        )
    }
}