import React from 'react';
import "./Nota.scss";

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={this.props.icon} alt={this.props.title} />
      </a>
    );
  }
}