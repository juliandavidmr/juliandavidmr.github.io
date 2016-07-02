import React from 'react';

export class Li extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.active? 'active': ''}>
        <a href="{this.props.href}">
          {this.props.title}
        </a>
      </li>
    );
  }

}
