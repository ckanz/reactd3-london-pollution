import React from 'react';
import ReactDOM from 'react-dom';
import Legend from './components/Legend.js';
import LineChart from './components/LineChart.js';
import Headline from './components/Headline.js';
import Footer from './components/Footer.js';

const chartData = require('dsv-loader?delimiter=,!./data/london_pollution.csv');

const schema = [
  {
    field: 'Nitrogen Dioxide (ug/m3)',
    name: 'Nitrogen Dioxide (ug/m3)',
    color: '#67513E'
  },
  {
    field: 'Ozone (ug/m3)',
    name: 'Ozone (ug/m3)',
    color: '#B1B24C'
  },
  {
    field: 'PM10 Particulate (ug/m3)',
    name: 'PM10 Particulate (ug/m3)',
    color: '#99ACB2'
  },
  {
    field: 'PM2.5 Particulate (ug/m3)',
    name: 'PM2.5 Particulate (ug/m3)',
    color: '#000000'
  },
  {
    field: 'Sulphur Dioxide (ug/m3)',
    name: 'Sulphur Dioxide (ug/m3)',
    color: '#7FB9CC'
  }
];

const mainStyle = {
  margin: 'auto',
  textAlign: 'center',
  width: '100%'
};

const App = () => (
  <div style={mainStyle}>
    <Headline />
    <LineChart data={chartData} schema={schema} />
    <Legend schema={schema} />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
