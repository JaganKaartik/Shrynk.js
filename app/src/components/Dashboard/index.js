import React, { useEffect, useState, useContext } from 'react';
import Body from './Body';
import Header from './Header';
import CreateURL from '../CreateURL';
import { ToastContainer } from 'react-toast';
import { DataContext } from '../../context/DataContext';
import { getAllURLS } from '../../helpers/api.helper';
import { themeToggleHandler } from '../../helpers/theme.helper';
import CustomLoader from './Loader';
import DefaultDash from './DefaultDash';
import ArrowSVG from '../../assets/images/right-arrow.svg';

export default function Dashboard() {
  const { dataFetched, dataUpdated } = useContext(DataContext);
  const { setData } = dataFetched;
  const { update } = dataUpdated;
  const [loaded, setLoading] = useState(false);
  const [dataPresent, setdataPresent] = useState(false);

  useEffect(() => {
    themeToggleHandler();
    async function fetchURLS() {
      const result = await getAllURLS();
      if (result.success) {
        setData(result.data);
        setdataPresent(true);
      } else {
        setdataPresent(false);
      }
      setLoading(true);
    }
    fetchURLS();
  }, [setData, update]);

  function showTable() {
    return dataPresent ? (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="border lg:hidden custom-card mx-auto py-1 px-5 shadow-md overflow-hidden ">
                <div className="md:flex space-x-4">
                  <p className="inline-flex animate-pulse px-10 def-dash-card block mt-1 text-lg leading-tight font-mono custom-card-text">
                    Swipe left to view table
                  </p>
                  <div className="inline-flex animate-bounce">
                    <img src={ArrowSVG} width="20" height="10" alt="arrow" />
                    <img src={ArrowSVG} width="20" height="10" alt="arrow" />
                    <img src={ArrowSVG} width="20" height="10" alt="arrow" />
                  </div>
                </div>
              </div>
              <table className="min-w-full divide-y">
                <Header />
                <Body />
              </table>
            </div>
          </div>
        </div>
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
