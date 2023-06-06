import React from "react";
import {NavLink} from "react-router-dom";
import "./MainMenu.scss"
import {useTranslation} from "react-i18next";

const MainMenu = () => {
    const [t,] = useTranslation("translations");
    return (
        <>
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