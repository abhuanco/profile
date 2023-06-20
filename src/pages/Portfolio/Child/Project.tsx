import {Portfolio} from "../../../applications/models/Portfolio";
import {Component} from "react";

class Project extends Component<{ portfolio: Portfolio }> {
    render() {
        let {portfolio} = this.props;
        return (
            <>
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="card">
                        <img src={portfolio.icon} className="card-img-top" alt={portfolio.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{portfolio.title}</h5>
                            <p className="card-text">
                                {portfolio.description}
                            </p>
                            <div className="bss-technologies">
                                {portfolio.technologies.map((v, k) =>
                                    <a href={v.url} className="bss-tech-icon">{v.title}</a>)
                                }
                            </div>
                            <a href={portfolio.url} className="btn btn-primary">Go porject</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;