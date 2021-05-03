import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { deleteURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';
import moment from 'moment';
import DisplayQR from './DisplayQR';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  const onClickHandler = (value) => {
    toast('Copied to Clipboard!', {
      backgroundColor: '#344fa1',
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
          <CopyToClipboard text={result.shortURL}>
            <button
              className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-300 font-bold py-2 px-4 h-10 "
              onClick={() => onClickHandler(result.shortURL)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                data-name="Paste 2"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0,0H24V24H0Z" data-name="Path 3639" />
                <path
                  fill="#525863"
                  d="M71.694,699.651a1.793,1.793,0,0,1-1.784-1.8v-1.8H68.126a1.793,1.793,0,0,1-1.784-1.8V683.439a1.793,1.793,0,0,1,1.784-1.8h3.409a1.2,1.2,0,0,1,2.4,0h3.407a1.793,1.793,0,0,1,1.784,1.8v1.8h1.784a1.793,1.793,0,0,1,1.784,1.8v5.4a3.115,3.115,0,0,1-1.189,2.7l-3.568,3.6a3.57,3.57,0,0,1-2.973.9Zm0-1.8h2.973v-3.431a2.863,2.863,0,0,1,2.846-2.874h3.4v-4.5H71.694Zm4.757-3.431v3.247a1.329,1.329,0,0,0,.225-.189l3.568-3.6a5.174,5.174,0,0,0,.485-.528H77.513A1.068,1.068,0,0,0,76.451,694.419Zm-5.192,1.63Zm-1.349-1.8v-7.205a1.793,1.793,0,0,1,1.784-1.8h5.649v-1.8H76.116a1.192,1.192,0,0,1-1.152.9H70.505a1.192,1.192,0,0,1-1.152-.9H68.126v10.808Z"
                  data-name="Color Fill 21"
                  transform="translate(-62.443 -678.051)"
                />
              </svg>
            </button>
          </CopyToClipboard>
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
