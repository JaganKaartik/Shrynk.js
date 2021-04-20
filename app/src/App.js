import React, { useContext, useEffect } from 'react';
import Routes from './Router';
import Footer from './components/Commons/Footer';
import { getAuthToken } from './services/token';
import { UserContext } from './context/UserContext';

export default function App() {
  const { jwt, setJwt } = useContext(UserContext);
  function handleTheme() {
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
  }

  useEffect(() => {
    handleTheme();
    const token = getAuthToken();
    if (token) {
      setJwt(token);
    }
  });

  return (
    <div className="flex flex-col h-screen">
      <Routes />
      <Footer />
    </div>
  );
}
