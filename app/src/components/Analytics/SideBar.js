import React from 'react';

const AnalyticsSideBar = (props) => {
  /*
  y = Total Visits (Number)
  x = Url (String)
  */
  const cardElement = (result, index) => {
    return (
      <div class=" transition duration-200 ease-in-out transform hover:scale-105 motion-reduce:transform-none max-w-md mx-auto analytics-card rounded-xl shadow-2xl overflow-hidden">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase  tracking-wide text-md custom-card-text  font-extrabold">
              Total Visits: {result.y}
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium custom-card-text text-wrap">
              <a href={result.x} target="_blank" rel="noreferrer">
                {result.x}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 flex flex-col overflow-hidden px-6 py-8">
      <ul className="space-y-6">
        {props.myData.dataPresent &&
          props.myData.chartData.map((result, index) =>
            cardElement(result, index + 1)
          )}
      </ul>
    </div>
  );
};

export default AnalyticsSideBar;
