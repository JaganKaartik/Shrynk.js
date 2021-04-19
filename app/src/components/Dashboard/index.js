import React from 'react';
import Body from './Body';
import Header from './Header';
import CreateURL from '../CreateURL';

export default function Dashboard() {
  return (
    <div className="container">
      <CreateURL />
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    </div>
  );
}
