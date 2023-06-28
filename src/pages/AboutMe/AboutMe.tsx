import './AboutMe.scss'
import {useTranslation} from "react-i18next";

export const AboutMe = () =>  {
    const {t} = useTranslation("translations");
    return (<>
        <h1>{t('menu.about-me')}</h1>
        <h2>{t('titles.senior')}</h2>
        <p>{t('pages.about-me.about_me_01')}</p>
        <p>{t('pages.about-me.about_me_02')}</p>
        <p>{t('pages.about-me.about_me_03')}</p>
        <p>{t('pages.about-me.about_me_04')}</p>
        <p>{t('pages.about-me.about_me_05')}</p>
    </>)
};