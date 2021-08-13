import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value, onSelect } = this.props;

    return (
      <section classnName="dashboard__panel" onClick={onSelect} >
        <h1 classnName="dashboard__panel-header">{label}</h1>
        <p classnName="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}


export default Panel;