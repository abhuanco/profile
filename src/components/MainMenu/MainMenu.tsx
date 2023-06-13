import React from "react";
import {NavLink} from "react-router-dom";
import "./MainMenu.scss"
import {useTranslation} from "react-i18next";
import logo from '../../img/logo-oficial.png';

const MainMenu = () => {
    const [t,] = useTranslation("translations");
    return (
        <>
            <div className="mss-logo-header">
                <img src={logo} className="mss-logo" alt="Buildsoft" title="Buildsoft"/>
            </div>
            <hr className="mss-separator"/>
            <nav>
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/">{t("menu.home")}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">{t('menu.portfolio')}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-me">{t('menu.about-me')}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact-me">{t('menu.contact-me')}</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default MainMenu;