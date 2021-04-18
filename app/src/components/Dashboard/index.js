import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Body from './Body';
import Header from './Header';

export default function Dashboard() {
  // const { jwt } = useContext(UserContext);

  // console.log(jwt);

  return (
    <div className="container">
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    </div>
  );
}
