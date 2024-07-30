// App.tsx
import React from 'react';
import HeroSection from './components/Hero';
import LanguageSelector from './components/LangChange'

const App: React.FC = () => {

  return (
    <div className="App">
      <LanguageSelector />
      <HeroSection />
    </div>
  );
};

export default App;
