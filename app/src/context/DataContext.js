import React, { createContext, useState } from 'react';

const DataContext = createContext([[], () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState({
    longURL: '',
    shortURL: '',
    activation: '',
    expiry: '',
    urlCode: '',
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
