import React from 'react';
import { VictoryTooltip, VictoryPie } from 'victory';
import InfoModal from './InfoModal';
import { displayImage } from './utils/displayImage';

export default function ChartDashboard(props) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900  flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      {console.log(`props.myData.dataPresent : ${props.myData.dataPresent}`)}
      {console.log(
        `props.myData.allVisitsZero : ${props.myData.allVisitsZero}`
      )}
      {props.myData.dataPresent ? (
        !props.myData.allVisitsZero ? (
          <div className="py-5 w-full analytics-card mx-auto rounded-xl shadow-md overflow-hidden">
            <h1 className="flex justify-center text-2xl font-extrabold custom-card-text tracking-tight font-mono">
              Total URL Visits
            </h1>
            <VictoryPie
              colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
              data={props.myData.chartData}
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: 'navy' } }}
              labelComponent={
                <VictoryTooltip
                  text={({ datum }) => datum.x}
                  constrainToVisibleArea
                />
              }
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: (props) => {
                            return <InfoModal data={props.datum} />;
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </div>
        ) : (
          displayImage('SHARE')
        )
      ) : (
        displayImage('TABLE')
      )}
    </div>
  );
}

// : props.myData.allVisitsZero ? (
//         displayImage('SHARE')
//       ) : (
