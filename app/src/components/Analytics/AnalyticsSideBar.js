import React from 'react';

const AnalyticsSideBar = (props) => {
  const cardElement = (result, index) => {
    return (
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <li key={index}>
              <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline">
                URL: {result.urls} Total Visits: {result.visits}
              </p>
            </li>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <ul>
        {props.data.map((result, index) => cardElement(result, index + 1))}
      </ul>
    </div>
  );
};

export default AnalyticsSideBar;
