import React, { Component } from 'react';

class SearchBar extends Component {
  //This is how we define a state
  //Functional components doesn't have state
  constructor (props) {
    super(props);
    this.state = {term : ''};
  }

  render () {
    return <input onChange= {this.onInputChange} />;
  }

  onInputChange (event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
