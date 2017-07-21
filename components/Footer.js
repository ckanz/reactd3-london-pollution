'use strict';

const React = require('react');

let footerTextStyle = {
  textAlign: 'left',
  marginLeft: 50
};
let dividerStyle = {
  margin: 40,
  border: '1px solid #646464'
};

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr style={dividerStyle} />
        <div style={footerTextStyle}>
          <p>Each pollutant is measured once per hour across the London Air Quality Network. Averages are calculated from these measurements.</p>
          <p>This chart has been created using the <a href="https://github.com/react-d3" target="blank">react-d3 framework</a>. Data comes from the <a href="https://data.london.gov.uk/dataset/london-average-air-quality-levels" target="blank">London Datastore</a>. You can find the source code for this project on <a href="https://github.com/ckanz/reactd3-london-pollution" target="blank">Github</a>.</p>
        </div>
    </div>
    );
  }
}

export default Footer;
