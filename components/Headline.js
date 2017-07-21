'use strict';

const React = require('react');

const headerStyle = {
  marginTop: 30
};

class Headline extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>Monthly Average Roadside Air Quality Levels in London</h1>
      </div>
    );
  }
}

export default Headline;
