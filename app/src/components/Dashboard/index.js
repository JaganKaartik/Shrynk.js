import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Body from './Body';
import Header from './Header';

export default function Dashboard() {
  const { jwt } = useContext(UserContext);

  console.log(jwt);

  return (
    <div>
      <table className="table-fixed container">
        <Header />
        <Body />
      </table>
    </div>
  );
}
