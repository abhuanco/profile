
import {useTranslation} from "react-i18next";

export default function Translate(key: string) {
    const {t} = useTranslation("translations");
    return t(`${key}`);
}