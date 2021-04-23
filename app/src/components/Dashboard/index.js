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
  const { dataFetched, dataUpdated } = useContext(DataContext);
  const { setData } = dataFetched;
  const { update } = dataUpdated;
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
  }, [setData, update]);

  function showTable() {
    return dataPresent ? (
      <div className="flex flex-1 flex-grow flex-col overflow-hidden px-2 py-5">
        <table className="w-full">
          <Header />
          <Body />
        </table>
      </div>
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
