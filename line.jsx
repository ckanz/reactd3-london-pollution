"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {
  var chartData = require('dsv-loader?delimiter=,!./data/london_pollution.csv');
  var parseDate = d3.time.format("%Y-%m-%d").parse;
  var width = 700;
  var height = 300;
  var margins = {left: 100, right: 100, top: 50, bottom: 50};
  var title = "Monthly Average London Air Quality Data";
  var chartSeries = [
    {
      field: 'Nitrogen Dioxide (ug/m3)',
      name: 'Nitrogen Dioxide (ug/m3)',
      color: '#000000'
    },
    {
      field: 'Ozone (ug/m3)',
      name: 'Ozone (ug/m3)',
      color: '#CCCCCC'
    },
    {
      field: 'PM10 Particulate (ug/m3)',
      name: 'PM10 Particulate (ug/m3)',
      color: '#444444'
    },
    {
      field: 'PM2.5 Particulate (ug/m3)',
      name: 'PM2.5 Particulate (ug/m3)',
      color: '#666666'
    },
    {
      field: 'Sulphur Dioxide (ug/m3)',
      name: 'Sulphur Dioxide (ug/m3)',
      color: '#999999'
    }
  ];
  var x = function(d) {
    return parseDate(d.Month);
  };
  var xScale = 'time';

  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={0}
      margins= {margins}
      >
      <LineChart
        showXGrid={false}
        showYGrid={false}
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
      />
    </Chart>
  , document.getElementById('line-user')
);
})();
