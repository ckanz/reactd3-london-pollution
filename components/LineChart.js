'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Chart = require('react-d3-core').Chart;
const LineChart = require('react-d3-basic').LineChart;
const parseDate = d3.time.format('%Y-%m-%d').parse;
const width = window.innerWidth-50;
const height = 400;
const margins = {left: 60, right: 100, top: 50, bottom: 50};
const title = 'Monthly Average London Air Quality Data';

const x = function(d) {
  return parseDate(d.Month);
};
const xScale = 'time';

class myLineChart extends React.Component {
  render() {
    return (
      <LineChart
        showLegend={false}
        showXGrid={false}
        margins={margins}
        title={title}
        data={this.props.data}
        width={width}
        height={height}
        chartSeries={this.props.schema}
        x={x}
        xScale={xScale}
      />
    );
  }
}

export default myLineChart;
