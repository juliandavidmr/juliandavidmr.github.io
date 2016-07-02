import React from 'react';

export class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '@anlijudavid',
      subtitle: 'Backend & Frontend'
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid banner text-center" id="banner">
          <div className="row">
            <div className="col-md-12 line">
              <div className="tablebox">
                <div className="banner-text" id="bannertext">
                  <h1 className="hostyle" id="heads">
                    {this.state.title}
                  </h1>
                  <p className="pstyle">
                    {this.state.subtitle}
                  </p>
                  <a href="#features" className="page-scroll arrow">
                    <i className="fa fa-angle-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar menubar" id="menu">
          <div className="container">
            <div className="navbar-header">
            	<button type="button" className="navbar-toggle menu-button" data-toggle="collapse" data-target="#myNavbar">
        			<span className="glyphicon glyphicon-align-justify"></span>
        		 </button>
            <a className="navbar-brand logo" href="#">Code</a>
            </div>
            <div>
            	<nav className="collapse navbar-collapse" id="myNavbar" role="navigation">
                <ul className="nav navbar-nav navbar-right navstyle">
                <li><a href="#banner" className="page-scroll active">Home</a></li>
                <li><a href="#features" className="page-scroll">Features</a></li>
                <li><a href="#gallery" className="page-scroll">Gallery</a></li>
                <li><a href="#about" className="page-scroll">About</a></li>
                <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
                <li><a href="#contact" className="page-scroll">Contact</a></li>
              </ul>
              </nav>
              </div>
          </div>
        </div>

      </div>

    );
  }

}
