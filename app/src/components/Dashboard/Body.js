import React, { useReducer, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { deleteURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';

export default function Body() {
  const { data } = useContext(DataContext);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleDelete = (value) => {
    deleteURL(value);
    forceUpdate();
    toast('Successfully Deleted Record.', {
      backgroundColor: '#FFA500',
      color: '#ffffff',
    });
  };

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
          <div className="shawdow-lg inline-flex">
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
