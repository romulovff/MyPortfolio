import React from 'react';
import './Header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedOption: 0};
  }

  state = {
    selectedOption: 0,
    hidden: false,
  }

  changeStyle(id){
    this.setState({
      selectedOption: id
    })
    console.log(this.state.selectedOption)
  }

  render(){
    return(
      <div>
        <nav className="background">
          <div className="buttons">
            <h1 className={this.state.selectedOption === 0 ? "selected" : "not-selected"} onClick={() => this.changeStyle(0)}>About</h1>
            <h1 className={this.state.selectedOption === 1 ? "selected" : "not-selected"} onClick={() => this.changeStyle(1)}>Projects</h1>
            <h1 className={this.state.selectedOption === 2 ? "selected" : "not-selected"} onClick={() => this.changeStyle(2)}>Contact</h1>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;