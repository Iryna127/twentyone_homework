import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import ThemeProvider from './providers/themeProvider';

function App() {
  return (
  <div className="App">
    <ThemeProvider>
      <HeaderComponent />
    </ThemeProvider>
  </div>
  );
}

export default App;
