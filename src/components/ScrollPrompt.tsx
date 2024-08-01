import React from 'react';
import { useTranslation } from 'react-i18next';


const ScrollPrompt: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="scroll-prompt">
        <p>{t("scrollprompt.content")}</p>
        <div className="arrow">↓</div>
    </div>
  );
};

export default ScrollPrompt;
