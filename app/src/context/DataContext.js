import React, { createContext, useState } from 'react';

const DataContext = createContext([[], () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState('');
  const [update, didUpdate] = useState(false);
  return (
    <DataContext.Provider
      value={{
        dataFetched: { data, setData },
        dataUpdated: { update, didUpdate },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
