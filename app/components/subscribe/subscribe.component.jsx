import React from 'react';

export class Subscribe extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subscribe-social">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="subscibe">
                <form role="form">
                  <div className="col-md-8 col-sm-10 col-xs-12">
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" placeholder="Enter Your Email address" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-2 col-xs-12 centertext">
                    <button type="submit" className="btn btn-or">Subscibe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 text-center">
              <ul className="social">
                <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
