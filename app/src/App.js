import React, { useContext, useEffect } from 'react';
import Routes from './Router';
import Footer from './components/Commons/Footer';
import { getAuthToken } from './helpers/token.helper';
import { UserContext } from './context/UserContext';
import { themeToggleHandler } from './helpers/theme.helper';
import '../node_modules/react-vis/dist/style.css';

export default function App() {
  const { auth } = useContext(UserContext);
  const { authState, setAuthState } = auth;

  useEffect(() => {
    themeToggleHandler();
    const token = getAuthToken();
    if (token) {
      setAuthState(!authState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Routes />
      <Footer />
    </div>
  );
}
