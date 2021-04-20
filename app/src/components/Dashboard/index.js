import React from 'react';
import Body from './Body';
import Header from './Header';
import CreateURL from '../CreateURL';
import { ToastContainer } from 'react-toast';

export default function Dashboard() {
  return (
    <div className="container">
      <ToastContainer position="top-center" delay={2000} />
      <CreateURL />
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    </div>
  );
}
