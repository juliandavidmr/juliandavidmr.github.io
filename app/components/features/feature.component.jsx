import React from 'react';

export class Feature extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6 col-sm-6 col-xs-12 featurebox">
        <div className="fh-desc">
          <h3>{this.props.titulo}</h3>
          <p>{this.props.resume}</p>
        </div>
      </div>
    );
  }

}
