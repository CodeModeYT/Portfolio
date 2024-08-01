import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from './ProfileImage';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion"

const HeroSection: React.FC = () => {
    const { t, i18n } = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const textControls = useAnimation();
    const [typingKey, setTypingKey] = useState(0);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            setTimeout(() => {
                textControls.start("visible");
            }, 950); // delay for text fade-in --> it starts to fade in after the image is completely faded (so it doesnt do that hop-thing)
        }
    }, [isInView]);

    useEffect(() => {
        setTypingKey(prevKey => prevKey + 1);
    }, [i18n.language]);

    const typingSequence = [
        t("herosec.typeeffect.student"),
        5000,
        t("herosec.typeeffect.webdev"),
        1000,
        t("herosec.typeeffect.pydev"),
        1000,
        t("herosec.typeeffect.uides"),
        1000,
        t("herosec.typeeffect.tech"),
        2500,
    ];

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
        >
            <div className="HeroSection">
                <ProfileImage />
                <motion.div
                    className="text-container"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={textControls}
                    transition={{ duration: 1 }}
                >
                    <h3>{t("herosec.greeting")}</h3>
                    <h1>Tillmann Menzer</h1>
                    <div className="inline-container">
                        <h2>{t("herosec.ima")}</h2>
                        <TypeAnimation
                            key={typingKey}
                            className="type-animation"
                            sequence={typingSequence}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default HeroSection;
