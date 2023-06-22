import {portfolios} from "../../applications/data/Porfolio/ListPortfolioData";
import {useTranslation} from "react-i18next";
import React from "react";

export default function ListPortfolio() {
    const [t,] = useTranslation("translations");

    const listItems = portfolios.map((portfolio) => {
        return (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 bss-project-item" key={portfolio.id} data-id={portfolio.id}>
                <div className="card bss-card-project">
                    <div className="card-body">
                        <div className="bss-project-image">
                            <img src={portfolio.icon} className="card-img-top" alt={portfolio.title}/>
                            <div className="bss-content-card">
                                <h5 className="card-title">{portfolio.title}</h5>
                                <div className="bss-technologies">
                                    {portfolio.technologies.map((technology, k) =>
                                        <a href={technology.url} className="bss-tech-icon">{technology.title}</a>)
                                    }
                                </div>
                                <p className="card-text">
                                    {portfolio.description}
                                </p>
                            </div>
                        </div>
                        <div className="bss-description-card">
                            <a href={portfolio.url} className="btn btn-primary bss-btn-primary float-end">Go project</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <>
                <h1>{t('menu.portfolio')}</h1>
                <hr className="bss-separator-horizontal"/>
                <div className="row g-2 bss-container-project">{listItems}</div>
            </>
}