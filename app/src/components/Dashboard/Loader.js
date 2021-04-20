import React from 'react';
import Loader from 'react-loader-spinner';

export default function CustomLoader() {
  return (
    <div className="container">
      <Loader type="Bars" color="#4b7297" height={80} width={1280} />
    </div>
  );
}
