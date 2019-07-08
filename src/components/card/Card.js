import React from 'react';
import Note from '../note/Note'
import "./Card.scss";

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatar: "https://avatars0.githubusercontent.com/u/4544102?v=3&s=460",
      skills: [{
        icon: require("../../fontawesome/svgs/brands/linkedin.svg"),
        link: 'https://www.linkedin.com/in/juli%C3%A1n-david-mora-ramos-21514b93/'
      }, {
        icon: require("../../fontawesome/svgs/brands/npm.svg"),
        link: 'https://www.npmjs.com/~anlijudavid'
      }, {
        icon: require("../../fontawesome/svgs/brands/github.svg"),
        link: 'https://github.com/juliandavidmr'
      }, {
        icon: require("../../fontawesome/svgs/brands/twitter.svg"),
        link: 'https://twitter.com/anlijudavid'
      }, {
        icon: require("../../fontawesome/svgs/brands/medium.svg"),
        link: 'https://medium.com/@anlijudavid'
      }, {
        icon: require("../../fontawesome/svgs/brands/instagram.svg"),
        link: 'https://www.instagram.com/iamjuliand/'
      }, {
        icon: require("../../fontawesome/svgs/brands/facebook.svg"),
        link: 'https://www.facebook.com/7u1iAn94Vi9'
      }]
    };
  }

  render() {
    return (
      <div className="content tooltip">
        <div className="card">
          <div className="firstinfo">
            <img src={this.state.avatar} alt="avatar" />

            <div className="profileinfo">
              <h1>Julian David</h1>
              <h3>Javascript Ninja</h3>
              <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
            </div>
          </div>
        </div>
        <div className="badgescard">
          {
            this.state.skills.map((skill, i) => {
              return <Note key={i} icon={skill.icon} title={skill.title} link={skill.link} />;
            })
          }
        </div>
      </div>
    );
  }
}