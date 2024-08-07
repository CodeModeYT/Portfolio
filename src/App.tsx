import React from 'react';
import HeroSection from './components/Hero';
import LanguageSelector from './components/LangChange'
import ScrollPrompt from './components/ScrollPrompt';
import AboutMe from './components/AboutMe';
import Copyright from './components/Copyright';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App: React.FC = () => {

  return (
    <div className="App">
      <LanguageSelector />
      <HeroSection />
      <ScrollPrompt />
      <AboutMe />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
