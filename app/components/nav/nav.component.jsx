import React from 'react';

import { Li } from './li.component.jsx';

export class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Maps for Ionic v2 TypeScript',
      menu_li: [{
        title: 'Code',
        description: 'Source Code TypeScript',
        href: '',
        active: false,
        id: '1'
      }, {
        title: 'About',
        description: 'Source Code TypeScript',
        href: '#about',
        active: false,
        id: '2'
      }, {
        title: 'Home',
        description: 'Source Code TypeScript',
        href: '#home',
        active: true,
        id: '3'
      }, {
        title: 'Contact',
        description: 'Source Code TypeScript',
        href: '#contact',
        active: false,
        id: '4'
      }]
    };
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              {this.state.name}
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {this.state.menu_li.map(function(item) {
                return <Li href={item.href} title={item.title} key={item.id} active={item.active} />;
              })}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
