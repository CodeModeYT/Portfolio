import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from './ProfileImage';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion"


const HeroSection: React.FC = () => {
    const [t, i18n] = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])

    return (
        <motion.div
        ref = {ref}
        variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25}}
        >
            <div className="HeroSection">
                <ProfileImage/>
                <div className="text-container">
                    <h3>{t("herosec.greeting")}</h3>
                    <h1>Tillmann Menzer</h1>
                    <div className="inline-container">
                        <h2>I'm a</h2>
                        <TypeAnimation
                            className="type-animation"
                            sequence={[
                                'student',
                                4000,
                                'Web Developer',
                                1000,
                                'Python Developer',
                                1000,
                                'UI Designer',
                                1000,
                                'passionate tech tinkerer :)',
                                2500,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default HeroSection;
