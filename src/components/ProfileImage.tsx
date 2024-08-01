import React from 'react';

const ProfileImage: React.FC = () => {
  return (
    <div className="container">
      <div className="blur-background"></div>
      <img src="/image.png" alt="Portrait" height="450vw" width="auto" className="main-image"/>
    </div>
  );
};

export default ProfileImage;
