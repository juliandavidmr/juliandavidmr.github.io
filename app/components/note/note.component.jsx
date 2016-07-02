import React from 'react';

export class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-10 col-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit nisl. Etiam a facilisis ante. Sed turpis felis, sagittis at risus ut, luctus feugiat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit nisl. Etiam a facilisis ante.</p>
            </div>
            <div className="col-md-3 col-sm-2 col-xs-12 text-center">
              <button>Click</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
