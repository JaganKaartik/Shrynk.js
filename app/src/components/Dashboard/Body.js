import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import { getAllURLS } from '../../services/api.helper';
import CustomLoader from './Loader';

export default function Body() {
  const { data, setData } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchURLS() {
      const result = await getAllURLS();
      setData(result.data);
      setLoading(false);
    }
    fetchURLS();
  }, []);

  function addTableRow(result, index) {
    return (
      <tr className="table-content">
        <td className="shadow-lg">
          <div className="flex justify-center content-center">{index}</div>
        </td>
        <td className="shadow-lg">
          <a href={result.longURL}>{result.longURL}</a>
        </td>
        <td className="shadow-lg">
          <a href={result.shortURL}>{result.shortURL}</a>
        </td>
        <td className="shadow-lg">{result.activation}</td>
        <td className="shadow-lg">{result.expiry}</td>
        <td className="shadow-lg">
          <div class="shawdow-lg inline-flex">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
  if (loading) {
    return <CustomLoader />;
  } else
    return (
      <tbody>
        {data.map((result, index) => {
          console.log(data);
          return addTableRow(result, index + 1);
        })}
      </tbody>
    );
}
