import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage: React.FC = () => {
  return (
    <motion.div
      className="container"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="blur-background"></div>
      <img src="/cm.png" alt="Portrait" height="450vw" width="auto" className="main-image" />
    </motion.div>
  );
};

export default ProfileImage;
