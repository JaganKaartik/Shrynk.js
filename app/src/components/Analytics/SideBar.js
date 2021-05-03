import React from 'react';
import AnalyticsSVG from '../../assets/images/analytics.svg';
import DefaultSVG from '../../assets/images/default_img.svg';
import AnalyseSVG from '../../assets/images/analyzer.svg';

const AnalyticsSideBar = (props) => {
  const cardElement = (result, index) => {
    return (
      <div class="max-w-md mx-auto custom-card rounded-xl shadow-2xl overflow-hidden md:max-w-full">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-28 w-full object-scale-down lg:object-fill md:w-28 bg-blue-100"
              src={DefaultSVG}
              alt="img"
            />
          </div>
          <div class="p-8">
            <div class="uppercase  tracking-wide text-sm text-indigo-500 font-semibold">
              Total Visits: {result.visits}
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium custom-card-text text-wrap">
              {result.urls}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const displayImage = () => {
    return (
      <div>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={AnalyticsSVG}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
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
