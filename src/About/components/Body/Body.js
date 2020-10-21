import React from 'react';
import './Body.scss';

class Body extends React.Component {
  render(){
    return(
      <div className="body-background">
        <div>
          <h1 className="name">Rômulo de Vasconcelos Feijão Filho</h1>
          <h1 className="job">Full-stack/Mobile Developer</h1>
        </div>
      </div>
    );
  }
}

export default Body;