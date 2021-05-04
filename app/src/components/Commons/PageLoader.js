import React from 'react';
import Loader from 'react-loader-spinner';

export default function PageLoader() {
  return (
    <div className="flex flex-1 h-full w-full justify-center items-center">
      <Loader type="TailSpin" color="#4b7297" height={80} width={1280} />;
    </div>
  );
}
