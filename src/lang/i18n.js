import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";

import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

const resources = {
    es: {
        translation: es
    },
    en: {
        translation: en
    },
    fr: {
        translation: fr
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;