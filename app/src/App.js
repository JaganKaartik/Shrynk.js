import React, { useContext, useEffect } from 'react';
import Routes from './Router';
import Footer from './components/Commons/Footer';
import { getAuthToken } from './helpers/token.helper';
import { UserContext } from './context/UserContext';
import { ToastContainer } from 'react-toast';
import { themeToggleHandler } from './helpers/theme.helper';
import '../node_modules/react-vis/dist/style.css';
import { REACT_APP_GA_ID } from './config';
import ReactGA from 'react-ga';

export default function App() {
  const { auth } = useContext(UserContext);
  const { authState, setAuthState } = auth;

  useEffect(() => {
    ReactGA.initialize(REACT_APP_GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    themeToggleHandler();
    const token = getAuthToken();
    if (token) {
      setAuthState(!authState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <ToastContainer position="top-center" delay={2500} />
      <Routes />
      <Footer />
    </div>
  );
}
