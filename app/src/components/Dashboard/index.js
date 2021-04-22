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
  const { dataFetched } = useContext(DataContext);
  const { setData } = dataFetched;
  const [loaded, setLoading] = useState(false);
  const [dataPresent, setdataPresent] = useState(false);

  useEffect(() => {
    async function fetchURLS() {
      const result = await getAllURLS();
      if (result.success) {
        setData(result.data);
        setdataPresent(true);
      }
      setLoading(true);
    }
    fetchURLS();
  }, [setData]);

  function showTable() {
    return dataPresent ? (
      <table className="w-full">
        <Header />
        <Body />
      </table>
    ) : (
      <DefaultDash />
    );
  }

  return (
    <div className="w-full">
      <ToastContainer position="top-center" delay={2000} />
      <CreateURL />
      {loaded ? (
        showTable()
      ) : (
        <div className="flex justify-center">
          <CustomLoader />
        </div>
      )}
    </div>
  );
}
