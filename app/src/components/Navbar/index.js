import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import Toggler from '../Commons/Toggler';
import Logo from '../../assets/images/logo.svg';
import { logout } from '../../helpers/token.helper';

const displayNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { auth, profile } = useContext(UserContext);
  const { jwt, setJwt } = auth;
  const { user } = profile;

  const logoutHandler = () => {
    setJwt('');
    logout();
  };

  if (jwt === '' || !jwt) {
    return (
      <ul className="nav-text lg:flex items-center justify-between text-base  pt-4 lg:pt-0">
        <li>
          <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
            <Toggler />
          </div>
        </li>
      </ul>
    );
  }
  return (
    <ul className="nav-text lg:flex items-center justify-between text-base pt-4 lg:pt-0">
      <li>
        <div className="text-white lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-green-400 lg:mb-0 mb-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
      </li>
      {/* <li>
        <div className="text-white lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-green-400 lg:mb-0 mb-2">
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </li> */}
      <li>
        <div className="text-white lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent hover:border-green-400 lg:mb-0 mb-2">
          <NavLink to="/" onClick={() => logoutHandler()}>
            Logout
          </NavLink>
        </div>
      </li>
      <li>
        <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
          <h1>Hi,{user}</h1>
        </div>
      </li>
      <li>
        <div className="lg:p-1.5 py-0.5 px-0 block border-b-2 border-transparent lg:mb-0 mb-2">
          <Toggler />
        </div>
      </li>
    </ul>
  );
};

export default function Navbar() {
  return (
    <div className="navbar">
      <header className="nav-theme lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <NavLink to="/">
            <img src={Logo} width="32" heigsht="36" alt="Shrynk" />
          </NavLink>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current menu-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full "
          id="menu"
        >
          <nav>{displayNav()}</nav>
        </div>
      </header>
    </div>
  );
}
