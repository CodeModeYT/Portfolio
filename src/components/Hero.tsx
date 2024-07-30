import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from './ProfileImage';
import { useTranslation } from 'react-i18next';


const HeroSection: React.FC = () => {
    const [t, i18n] = useTranslation("global");
    return (
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
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
