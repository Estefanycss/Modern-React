import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBdpVvV9SAq20RswdZmDXO36R4AAAQInGs';

const App = () => {
  return (
    <div >
      <SearchBar />
    < /div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
