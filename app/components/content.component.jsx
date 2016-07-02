import React from 'react';

import { Features } from './features/features.component.jsx';
import { Note } from './note/note.component.jsx';
import { About } from './about/about.component.jsx';
import { Footer } from './footer/footer.component.jsx';
import { Subscribe } from './subscribe/subscribe.component.jsx';

export class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Features />
        <Note />
        <About />
        <Subscribe />
        <Footer />

      </div>
    );
  }
}
