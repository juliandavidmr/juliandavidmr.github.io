import React from 'react';

import { Feature } from './feature.component.jsx';

export class Features extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="features" id="features">
        <div className="container">
          <div className="row">
            <Feature
              titulo="Creando Ideas"
              resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit nisl. Etiam a facilisis ante. Sed turpis felis, sagittis at risus ut," />

            <Feature
              titulo="Save Time"
              resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit nisl. Etiam a facilisis ante. Sed turpis felis, sagittis at risus ut," />
          </div>
        </div>
      </div>
    );
  }

}
