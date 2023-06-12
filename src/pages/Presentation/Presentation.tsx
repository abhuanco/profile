import React, {Component} from "react";
import Typed from 'react-typed';
import './Presentation.scss'
import {useTranslation} from "react-i18next";


const Presentation = () => {
    const [t,] = useTranslation("translations");

    return (
        <>
            <div className="mss-presentation">
                <h1>{t('welcome.first')}</h1>
                <h2>{t('welcome.second')}</h2>
                <p>{t('welcome.three')}</p>
                {/*<Typed className="mss-typed-presentation"
                       strings={[t('welcome.first'), t('welcome.second'), t('welcome.three')]} typeSpeed={40}/>*/}
            </div>
        </>
    )
}

export default Presentation;
