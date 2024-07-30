import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation("global");
    const currentLanguage = i18n.language;

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return(
        <div className="parent-langsel">
            <div className="language-selector">
                <p
                    onClick={() => handleChangeLanguage('en')}
                    className={`lang-option ${currentLanguage === 'en' ? 'selected' : ''}`}
                >
                    EN
                </p>
                <p>|</p>
                <p
                    onClick={() => handleChangeLanguage('de')}
                    className={`lang-option ${currentLanguage === 'de' ? 'selected' : ''}`}
                >
                    DE
                </p>
            </div>
        </div>
    )
}

export default LanguageSelector;
