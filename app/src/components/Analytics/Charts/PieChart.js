import React from 'react';
import { VictoryTooltip, VictoryPie } from 'victory';
import InfoModal from '../InfoModal';

export default function PieChart(props) {
  return (
    <div>
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
  );
}
