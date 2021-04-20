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
        setData(result.data);
        setdataPresent(true);
        setLoading(true);
      }
    }
    fetchURLS();
  }, []);

  return (
    <div className="container">
      <ToastContainer position="top-center" delay={2000} />
      <CreateURL />
      {dataPresent ? (
        loaded ? (
          <table className="responsive-table striped highlight">
            <Header />
            <Body />
          </table>
        ) : (
          <CustomLoader />
        )
      ) : (
        <div>
          <DefaultDash />
        </div>
      )}
    </div>
  );
}
