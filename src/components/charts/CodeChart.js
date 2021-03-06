import React from 'react';
import {BarChart} from 'react-easy-chart';

const margin = {top: 20, right: 20, bottom: 30, left: 40};

export default class CodeChart extends React.Component {
  render() {
    return (
      <div>
        <h4>Coding Skillset</h4>
        <BarChart
          data={[
              {x: 'NodeJS', y: 80, color: '#555'},
              {x: 'ReactJS', y: 90, color: '#555'},
              {x: 'jQuery', y: 85, color: '#555'},
              {x: 'CakePHP', y: 80, color: '#555'},
              {x: 'PHP', y: 95, color: '#555'},
              {x: 'MySQL', y: 85, color: '#555'}              
          ]}
          axes
          grid
          yDomainRange={[50,100]}
          height={250}
          width={350}
          barWidth={2}
          margin={margin}
        />
      </div>
    );
  }
}
