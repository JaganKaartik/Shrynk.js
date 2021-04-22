import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext([[], () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState('');
  const [update, didUpdate] = useState(false);

  // useEffect(() => {
  //   console.log('THIS SHOULD TRIGGER WHEN UPDATE CALLED');
  // }, [update, data]);

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
