import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return(
        <div className="parent-langsel">
            <div className="language-selector">
                <p onClick={() => handleChangeLanguage('en')}>EN</p>
                <p>|</p>
                <p onClick={() => handleChangeLanguage('de')}>DE</p>
            </div>
        </div>
    )
}

export default LanguageSelector;