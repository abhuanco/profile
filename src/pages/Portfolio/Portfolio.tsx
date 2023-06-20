import React, {Component} from "react";
import './Portfolio.scss'
import {Portfolio as ModelPortfolio} from "../../applications/models/Portfolio";
import Project from "./Child/Project";
import Technology from "../../applications/models/Technology";

export class Portfolio extends Component {
    protected portfolios: ModelPortfolio[] = [];
    list = () => {
        this.portfolios = [
            new ModelPortfolio(
                'https://picsum.photos/id/1/500/300',
                'Project One', 'https://www.project.one.com',
                'This project is dedicated for sales products sales man',
                [
                    new Technology('PHP', 'https://php.net'),
                    new Technology('Javascript', 'https://javascript.net'),
                    new Technology('jQuery', 'https://javascript.net'),
                ]
            ),
        ];
    };

    render() {
        return (
            <>
                <h2>Work</h2>
                <div className="row g-2">
                    {this.portfolios.map((portfolio, key) => {
                        return <Project portfolio={portfolio}/>
                    })}
                </div>
            </>
        )
    }
}