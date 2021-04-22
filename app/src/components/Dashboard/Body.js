import React, { useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { deleteURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';

export default function Body() {
  const { dataFetched, dataUpdated } = useContext(DataContext);
  const { data } = dataFetched;
  const { update, didUpdate } = dataUpdated;
  // const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleDelete = (value) => {
    deleteURL(value);
    didUpdate(!update);
    toast('Successfully Deleted Record.', {
      backgroundColor: '#FFA500',
      color: '#ffffff',
    });
  };

  function addTableRow(result, index) {
    return (
      <tr className="table-content">
        <td data-label="Sl.No" className="lg:shadow-lg">
          <div className="flex justify-center content-center">{index}</div>
        </td>
        <td data-label="Long URL" className="lg:shadow-lg">
          <a href={result.longURL}>{result.longURL}</a>
        </td>
        <td data-label="Short URL" className="lg:shadow-lg">
          <a href={result.shortURL}>{result.shortURL}</a>
        </td>
        <td data-label="Activation" className="lg:shadow-lg">
          {result.activation}
        </td>
        <td data-label="Expiry" className="lg:shadow-lg">
          {result.expiry}
        </td>
        <td data-label="Operation" className="shadow-2xl">
          <div className="flex justify-center content-center">
            <button
              onClick={() => handleDelete(result.urlCode)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tbody>
      {data.map((result, index) => {
        console.log(data);
        return addTableRow(result, index + 1);
      })}
    </tbody>
  );
}
