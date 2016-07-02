import React from 'react';

export class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="alldesc">
                <div className="col-md-6 col-sm-6 col-xs-12 centertext">
                  <p className="all-td">What You Want To Know</p>
                  <h2>About Us</h2>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit nisl. Etiam a facilisis ante. Sed turpis felis, sagittis at risus ut, luctus feugiat ipsum. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="progresscount">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="col-md-6 col-sm-6 col-xs-6 block">
                    <div className="counter-item">
                      <h5>Our Clients</h5>
                      <div className="timer" data-from="0" data-to="55" data-speed="5000" data-refresh-interval="50"></div>
                    </div>
                  </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="counter-item">
                    <h5>Projects completed</h5>
                    <div className="timer" data-from="0" data-to="88" data-speed="5000" data-refresh-interval="50"></div>
                  </div>
                </div>
              </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="progresstitle">
                    <h5>HTML5</h5>
                    <div className="progress progress-style">
                      <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width":"80%"}}> 80% </div>
                    </div>
                  </div>
                  <div className="progresstitle">
                    <h5>ReactJS</h5>
                    <div className="progress progress-style">
                      <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style={{"width":"60%"}}> 60% </div>
                    </div>
                  </div>
                  <div className="progresstitle">
                    <h5>AngularJS 1 & AngularJS 2</h5>
                    <div className="progress progress-style">
                      <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{"width":"85%"}}> 85% </div>
                    </div>
                  </div>
                  <div className="progresstitle">
                    <h5>NodeJS</h5>
                    <div className="progress progress-style">
                      <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{"width":"95%"}}> 95% </div>
                    </div>
                  </div>
                  <div className="progresstitle">
                    <h5>Databases: NoSQL & SQL</h5>
                    <div className="progress progress-style">
                      <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{"width":"90%"}}> 90% </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
