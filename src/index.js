import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBdpVvV9SAq20RswdZmDXO36R4AAAQInGs';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
       });
      // When both variables had the same name we can use this.setState({videos})
    });
  }

  render(){
    return (
      <div >
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      < /div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
