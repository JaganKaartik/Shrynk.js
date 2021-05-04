import React from 'react';

export default function DefaultInfoComponent(props) {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 flex flex-col h-auto overflow-hidden px-6 py-8">
      <div>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={props.data.image}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
      </div>

      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline">
              {props.data.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
