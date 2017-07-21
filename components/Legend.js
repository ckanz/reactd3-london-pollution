'use strict';

const React = require('react');

let schema = [];

class myLegned extends React.Component {

  constructor(props) {
    super(props);
    this.props.schema.forEach(function(item) {
      let myStyle = {
        color: item.color
      };
      let el = <span style={myStyle}>{'█ '+item.name+' '}</span>;
      schema.push(el);
    });
  }

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <ul>{schema}</ul>
      </div>
    );
  }
}

export default myLegned;
