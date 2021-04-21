import React, { useEffect, useState, useContext } from 'react';
import Body from './Body';
import Header from './Header';
import CreateURL from '../CreateURL';
import { ToastContainer } from 'react-toast';
import { DataContext } from '../../context/DataContext';
import { getAllURLS } from '../../helpers/api.helper';
import CustomLoader from './Loader';
import DefaultDash from './DefaultDash';

export default function Dashboard() {
  const { setData } = useContext(DataContext);
  const [loaded, setLoading] = useState(false);
  const [dataPresent, setdataPresent] = useState(false);

  useEffect(() => {
    async function fetchURLS() {
      const result = await getAllURLS();
      if (result.success) {
        console.log(result.succes);
        setData(result.data);
        setdataPresent(true);
      }
      console.log(result.data);
      setLoading(true);
    }
    fetchURLS();
  }, [setData]);

  function showTable() {
    return dataPresent ? (
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    ) : (
      <DefaultDash />
    );
  }

  return (
    <div className="container">
      <ToastContainer position="top-center" delay={2000} />
      <CreateURL />
      {loaded ? showTable() : <CustomLoader />}
    </div>
  );
}
