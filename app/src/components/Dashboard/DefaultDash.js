import React from 'react';
import table from '../../assets/images/table1.svg';

export default function DefaultDash() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={table}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
      </div>
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              Welcome to Shrynk
            </div>
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline">
              Start shrynking your long urls to view your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
