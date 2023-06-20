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
                'Recupalet',
                'https://www.project.one.com',
                'This project is dedicated for sales products sales man',
                [
                    new Technology('PHP', 'https://php.net'),
                    new Technology('Javascript', 'https://javascript.net'),
                    new Technology('jQuery', 'https://javascript.net'),
                ]
            ),
            new ModelPortfolio(
                'https://picsum.photos/id/1/500/300',
                'Myrcosport B2B',
                'https://www.project.one.com',
                'This project is dedicated for sales products sales man',
                [
                    new Technology('PHP', 'https://php.net'),
                    new Technology('Javascript', 'https://javascript.net'),
                    new Technology('jQuery', 'https://javascript.net'),
                ]
            ),
            new ModelPortfolio(
                'https://picsum.photos/id/1/500/300',
                'Keeway B2B',
                'https://www.project.one.com',
                'This project is dedicated for sales products sales man',
                [
                    new Technology('PHP', 'https://php.net'),
                    new Technology('Javascript', 'https://javascript.net'),
                    new Technology('jQuery', 'https://javascript.net'),
                ]
            ),
            new ModelPortfolio(
                'https://picsum.photos/id/1/500/300',
                'Morillas Odoo',
                'https://www.project.one.com',
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
        this.list();
        return (
            <>
                <h1>Portfolio</h1>
                <div className="row g-2">
                    {this.portfolios.map((portfolio, key) => {
                        return <Project portfolio={portfolio}/>
                    })}
                </div>
            </>
        )
    }
}