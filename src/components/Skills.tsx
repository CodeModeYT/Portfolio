import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion";

const Skills: React.FC = () => {
    const { t } = useTranslation("global");

    const mainRef = useRef(null);
    const languagesRef = useRef(null);
    const codingRef = useRef(null);
    const hardwareRef = useRef(null);
    const softwareRef = useRef(null);

    const mainInView = useInView(mainRef, { once: true });
    const languagesInView = useInView(languagesRef, { once: true });
    const codingInView = useInView(codingRef, { once: true });
    const hardwareInView = useInView(hardwareRef, { once: true });
    const softwareInView = useInView(softwareRef, { once: true });

    const mainControls = useAnimation();
    const languagesControls = useAnimation();
    const codingControls = useAnimation();
    const hardwareControls = useAnimation();
    const softwareControls = useAnimation();

    useEffect(() => {
        if (mainInView) {
            mainControls.start("visible");
        }
    }, [mainInView]);

    useEffect(() => {
        if (languagesInView) {
            languagesControls.start("visible");
        }
    }, [languagesInView]);

    useEffect(() => {
        if (codingInView) {
            codingControls.start("visible");
        }
    }, [codingInView]);

    useEffect(() => {
        if (hardwareInView) {
            hardwareControls.start("visible");
        }
    }, [hardwareInView]);

    useEffect(() => {
        if (softwareInView) {
            softwareControls.start("visible");
        }
    }, [softwareInView]);

    return (
        <motion.div
            ref={mainRef}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className='skills'
        >
            <motion.div
                ref={languagesRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={languagesControls}
                transition={{ duration: 1, delay: 0 }}
            >
                <h1>{t("skills.title")}</h1>
                <h2 className='indent_one'>{t("skills.languages.title")}</h2>
                <p className='indent_two'>{t('skills.languages.content').split('\n').map((item, key) => (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
                <br />
            </motion.div>
            <motion.div
                ref={codingRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={codingControls}
                transition={{ duration: 1, delay: 0 }}
            >
                <h2 className='indent_one'>{t("skills.coding.title")}</h2>
                <p className='indent_two'>{t('skills.coding.content').split('\n').map((item, key) => (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
                <br />
            </motion.div>
            <motion.div
                ref={hardwareRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={hardwareControls}
                transition={{ duration: 1, delay: 0 }}
            >
                <h2 className='indent_one'>{t("skills.hardware.title")}</h2>
                <p className='indent_two'>{t('skills.hardware.content').split('\n').map((item, key) => (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
                <br />
            </motion.div>
            <motion.div
                ref={softwareRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={softwareControls}
                transition={{ duration: 1, delay: 0 }}
            >
                <h2 className='indent_one'>{t("skills.software.title")}</h2>
                <p className='indent_two'>{t('skills.software.content').split('\n').map((item, key) => (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
            </motion.div>
        </motion.div>
    );
}

export default Skills;
