import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
    return (
        <div className="HeroSection">
            <img src="/image.png" alt="Hero Image" height="400px" width="auto"/>
            <p>Hey there, my name is</p>
            <h1>Tillmann Menzer</h1>

            <TypeAnimation
            sequence={[
            'passionate tech tinkerer',
            1000,
            'student',
            1000,
            ]}
            speed={50}
            repeat={Infinity}
        />
        </div>
    );
}

export default HeroSection;
