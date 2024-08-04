import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion"

const Contact: React.FC = () => {
    const { t, i18n } = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className='contact'
        >
            <h1>{t("contact.title")}</h1>
            <div className='github'>
                <img src="/gh_icon.png" alt="GitHub" height="45vw" width="auto"/>
                <a href="https://www.github.com/codemodeyt" className="github_text">@CodeModedYT</a>
            </div>
            <div className='mail'>
                <img src="/mail_icon.png" alt="Mail" height="45vw" width="auto"/>
                <a href="mailto:l@l.com" className='mail_text'>not.gonna-leak@that.here</a>
            </div>
            <div className='phone'>
                <img src="/phone_icon.png" alt="Phone" height="45vw" width="auto"/>
                <a href="tel:00491234567" className='phone_text'>+49 1234567</a>
            </div>
        </motion.div>
    );
}

export default Contact;
