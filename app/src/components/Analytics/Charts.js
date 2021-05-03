import React from 'react';
import { VictoryPie } from 'victory';

export default function ChartDashboard(props) {
  const toolTip = (message) => {
    return (
      <div class="has-tooltip">
        <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
          {message}
        </span>
        Custom Position (above)
      </div>
    );
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900  flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div>
        <div className="analytics-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl">
          <div className="md:flex">
            {/* <img
                className="h-auto w-full object-cover md:flex-shrink-0 "
                src={AnalyticsSVG}
                alt="loading..."
                style={{ maxWidth: '450px', margin: '5px auto 0' }}
              /> */}
          </div>
        </div>
      </div>
      <div className="w-full analytics-card mx-auto rounded-xl shadow-md overflow-hidden">
        {console.log(props.chartData)}
        {/* {props.dataPresent && ( */}
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={props.myData.chartData}
          labels={({ datum }) => datum.y}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: (props) => {
                        console.log(props);
                        return <toolTip props={props.daytum} />;
                        // return props.text === props.datum.x
                        //   ? null
                        //   : { text: props.datum.x };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        {/* )} */}
      </div>
    </div>
  );
}
