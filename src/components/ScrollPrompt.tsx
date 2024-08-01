import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ScrollPrompt: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeLength = 300;
      const newOpacity = 1 - Math.min(scrollY / fadeLength, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      className="scroll-prompt" 
      initial={{ opacity: 1 }}
      animate={{ opacity }}
    >
        <p>{t("scrollprompt.content")}</p>
        <div className="arrow">↓</div>
    </motion.div>
  );
};

export default ScrollPrompt;
