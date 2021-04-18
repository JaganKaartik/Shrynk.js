import React, { createContext, useEffect, useState } from 'react';
import getALLURLS from '../services/api.helper';

const DataContext = createContext([[], () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const result = getALLURLS();
    result.then((resp) => setData({ data: resp.data }));
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
