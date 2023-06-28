import {Component} from "react";
import './AboutMe.scss'
import Translate from "../../utils/translate";

export class AboutMe extends Component {

    render = () => (
        <>
            <h1>{Translate('menu.about-me')}</h1>
            <h2>{Translate('titles.senior')}</h2>
            <p>{Translate('pages.about-me.about_me_01')}</p>
            <p>{Translate('pages.about-me.about_me_02')}</p>
            <p>{Translate('pages.about-me.about_me_03')}</p>
            <p>{Translate('pages.about-me.about_me_04')}</p>
            <p>{Translate('pages.about-me.about_me_05')}</p>
        </>
    );
}