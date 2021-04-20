import React, { createContext, useState } from 'react';

const DataContext = createContext([[], () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState([
    {
      longURL: 'add a long url',
      shortURL: 'add a short url',
      activation: 'add a activation',
      expiry: 'add a expiry',
      urlCode: 'add a urlcode',
    },
  ]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
