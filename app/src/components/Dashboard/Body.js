import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { deleteURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';
import moment from 'moment';
import DisplayQR from './DisplayQR';

export default function Body() {
  const { dataFetched, dataUpdated } = useContext(DataContext);
  const { data } = dataFetched;
  const { update, didUpdate } = dataUpdated;

  const handleDelete = (value) => {
    deleteURL(value).then((resp) => didUpdate(!update));
    toast('Successfully Deleted Record.', {
      backgroundColor: '#FFA500',
      color: '#ffffff',
    });
  };

  function addTableRow(result, index) {
    return (
      <tr key={index} className="table-ui">
        <td className="px-6 py-4 whitespace-normal">
          <div className="flex justify-center content-center">{index}</div>
        </td>
        <td className="px-6 py-4 whitespace-normal hover:underline">
          <a href={result.longURL}>{result.longURL}</a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap hover:underline">
          <a href={result.shortURL}>{result.shortURL}</a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap hover:underline">
          <DisplayQR url={[result.shortURL, result.urlCode]} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="p-1 px-2 inline-flex text-base leading-5 text-gray-100 bg-gradient-to-r from-green-500 to-blue-600  rounded-lg ">
            {moment(result.activation).format('LLLL')}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="p-1 px-2 inline-flex text-base leading-5 text-gray-100 bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg">
            {moment(result.expiry).format('LLLL')}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex-1 justify-center content-center">
            <button
              onClick={() => handleDelete(result.urlCode)}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-100 font-bold py-2 px-4 rounded-l"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((result, index) => {
        return addTableRow(result, index + 1);
      })}
    </tbody>
  );
}
