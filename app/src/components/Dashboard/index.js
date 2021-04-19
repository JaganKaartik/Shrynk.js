import React, { useEffect, useContext } from 'react';
import Body from './Body';
import Header from './Header';
import CreateURL from '../CreateURL';

export default function Dashboard() {
  // const { setData } = useContext(DataContext);

  // useEffect(() => {
  //   async function fetchURLS() {
  //     const result = await getAllURLS();
  //     console.log(result);
  //     result.then((resp) => setData(resp.data));
  //   }
  //   fetchURLS();
  // }, []);

  return (
    <div className="container">
      <CreateURL />
      <table className="responsive-table striped highlight">
        <Header />
        <Body />
      </table>
    </div>
  );
}
