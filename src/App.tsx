// App.tsx
import React from 'react';
import HeroSection from './components/Hero';


const App: React.FC = () => {
  const texts: string[] = ['Hello World!', 'Welcome to React.', 'Enjoy your stay!'];

  return (
    <div className="App">
      <HeroSection />
    </div>
  );
};

export default App;
