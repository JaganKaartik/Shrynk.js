import React from 'react';
import AnalyticsSVG from '../../assets/images/analytics.svg';

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
              {result.x}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const displayImage = () => {
    return (
      <div class=" transition duration-200 ease-in-out transform hover:scale-105 motion-reduce:transform-none max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div class="md:flex">
          <img
            className="h-auto w-full object-cover md:flex-shrink-0 "
            src={AnalyticsSVG}
            alt="loading..."
            style={{ maxWidth: '450px', margin: '5px auto 0' }}
          />
        </div>
        <div class="p-8">
          <p class="flex justify-center block mt-1 text-lg leading-tight font-medium  text-wrap">
            Create and share URLs to use Analytics.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <ul className="space-y-6">
        {console.log(props.myData.dataPresent)}
        {props.myData.dataPresent
          ? props.myData.chartData.map((result, index) =>
              cardElement(result, index + 1)
            )
          : displayImage()}
      </ul>
    </div>
  );
};

export default AnalyticsSideBar;
