import React, { useEffect } from 'react';
import Routes from './Router';
import Footer from './components/Commons/Footer';

export default function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null;
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  });
  return (
    <div className="flex flex-col h-screen">
      <Routes />
      <Footer />
    </div>
  );
}
