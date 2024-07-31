// App.tsx
import React from 'react';
import HeroSection from './components/Hero';
import LanguageSelector from './components/LangChange'
import ScrollPrompt from './components/ScrollPrompt';

const App: React.FC = () => {

  return (
    <div className="App">
      <LanguageSelector />
      <HeroSection />
      <ScrollPrompt />
    </div>
  );
};

export default App;
