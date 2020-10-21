import React from 'react';
import './About.scss';
import Body from './components/Body/Body';

class About extends React.Component {
  render(){
    return(
      <div className="about-background">
        <Body></Body>
      </div>
    );
  }
}

export default About;