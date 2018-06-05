import React, { Component } from 'react';

class SearchBar extends Component {
  //This is how we define a state
  //Functional components doesn't have state
  constructor (props) {
    super(props);
    this.state = {term : ''};
  }

// A controlled component has it's value set by state

  render () {
    return (
      <div className="search-bar">
        <input onChange= {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

export default SearchBar;
