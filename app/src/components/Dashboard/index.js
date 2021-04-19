import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Body from './Body';
import Header from './Header';
import { getAllURLS } from '../../services/api.helper';
import './dashboard.css';

export default function Dashboard() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    const result = getAllURLS();
    console.log(result);
    result.then((resp) => setData(resp.data));
  }, []);

  return (
    <div className="container">
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    </div>
  );
}
