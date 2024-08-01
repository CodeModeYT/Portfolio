import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion"

const AboutMe: React.FC = () => {
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
            className='about_me'
        >
            <h1>{t("aboutme.title")}</h1>
            <p className='indent_one'>{t('aboutme.content').split('\n').map((item, key) => (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
        </motion.div>
    );
}

export default AboutMe;
