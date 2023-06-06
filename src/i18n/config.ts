import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import locale_es from './locales/es/global.json';
import locale_en from './locales/en/global.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: locale_en
        },
        es: {
            translations: locale_es
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'es'];

export default i18n;