import React from 'react';
import Loader from 'react-loader-spinner';

export default function CustomLoader() {
  return (
    <tbody>
      <tr className="table-content">
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
        <td>
          <Loader type="BallTriangle" color="#4b7297" height={80} width={80} />
        </td>
      </tr>
    </tbody>
  );
}
