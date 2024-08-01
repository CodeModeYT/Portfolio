import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Copyright: React.FC = () => {
    const { t, i18n } = useTranslation("global");

    return (
        <div className='copyright'>
            <p>{t("copyright.content")}</p>
        </div>
    );
}

export default Copyright;
