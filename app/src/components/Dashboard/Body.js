import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function Body() {
  function addTableRow(result) {
    return (
      <tr>
        <td>1</td>
        <td>{result.longURL}</td>
        <td>{result.shortURL}</td>
        <td>{result.activation}</td>
        <td>{result.expiry}</td>
      </tr>
    );
  }

  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <tbody>
      {data.map((result) => {
        console.log(data);
        return addTableRow(result);
      })}
    </tbody>
  );
}
