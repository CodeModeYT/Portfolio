import React from 'react';
import HeroSection from './components/Hero';
import LanguageSelector from './components/LangChange'
import ScrollPrompt from './components/ScrollPrompt';
import AboutMe from './components/AboutMe';
import Copyright from './components/Copyright';

const App: React.FC = () => {

  return (
    <div className="App">
      <LanguageSelector />
      <HeroSection />
      <ScrollPrompt />
      <AboutMe />
      <Copyright />
    </div>
  );
};

export default App;
