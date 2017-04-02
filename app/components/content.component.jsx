import React from 'react';

import { Note } from './note/note.component.jsx';

export class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      img: 'https://avatars0.githubusercontent.com/u/4544102?v=3&s=460',
      name: 'Julian David',
      sub: 'Javascript Ninja',
      bio: 'Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.',
      skills: [{
        icon: 'python',
        title: 'A markov chain: predict text'
      }, {
        icon: 'nodejs',
        title: 'Many projects: Libraries npm, APIs, sites, tutorials...'
      }, {
        icon: 'javascript_badge',
        title: 'Almost everything i could imagine'
      }, {
        icon: 'github',
        title: 'My favorite social network'
      }, {
        icon: 'java',
        title: 'The ancestor from whom I learned many things'
      }, {
        icon: 'streamline',
        title: 'A module for oracle'
      }, {
        icon: 'npm',
        title: 'Many libraries for NodeJS'
      }, {
        icon: 'linux',
        title: 'My favorite SO'
      }, {
        icon: 'terminal',
        title: 'My best friend'
      }, {
        icon: 'ionic',
        title: 'A few applications published in the playstore.'
      }]
    };
  }

  render() {
    return (
      <div className="content tooltip">
        <div className="card">
          <div className="firstinfo">
            <img src={this.state.img} />
            <div className="profileinfo">
              <h1>{this.state.name}</h1>
              <h3>{this.state.sub}</h3>
              <p className="bio">{this.state.bio}</p>
            </div>
          </div>
        </div>
        <div className="badgescard">
          {
            this.state.skills.map((skill) => {
              return <Note icon={skill.icon} title={skill.title} />;
            })
          }          
        </div>
      </div>
    );
  }
}
