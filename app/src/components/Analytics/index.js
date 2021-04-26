import React from 'react';
// import { totalVisitsURLData } from './analytics.utils';
// import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

export default function AnalyticsDashboard() {
  // const [AnalyticsData, setAnalyticsData] = useState('');

  // useEffect(() => {
  //   //  themeToggleHandler();
  //   async function fetchAnalyticsData() {
  //     const result = await totalVisitsURLData();
  //     result.forEach(function (element, index) {
  //       console.log(element.urlCode + ' ' + element.visits);
  //     });
  //     setAnalyticsData(result);
  //   }
  //   fetchAnalyticsData();
  // }, []);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              Welcome to Analytics
            </div>
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline">
              Currently building the feature! Explore other routes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center h-96 w-full object-cover md:flex-shrink-0">
        <div>
          {/* <XYPlot xType="ordinal" height={300} width={500}>
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={myData} />
          </XYPlot> */}
        </div>
      </div>
    </div>
  );
}
