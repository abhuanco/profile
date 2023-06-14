import React from "react";
import './Presentation.scss'
import {useTranslation} from "react-i18next";
import profileImage from './../../img/image-profile.png'

const Presentation = () => {
    const [t,] = useTranslation("translations");

    return (
        <>
            <div className="mss-presentation">
                <img className="mss-image-profile" src={profileImage} alt="René Huanco Choque"/>
                <h1 className="mss-first">{t('welcome.first')}</h1>
                <h2 className="mss-second">{t('welcome.second')}</h2>
                <strong>{t('welcome.three')}</strong>
                {/*<Typed className="mss-typed-presentation"
                       strings={[t('welcome.first'), t('welcome.second'), t('welcome.three')]} typeSpeed={40}/>*/}
            </div>
        </>
    )
}

export default Presentation;
