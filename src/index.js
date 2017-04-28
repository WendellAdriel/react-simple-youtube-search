import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Config from './config/config'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({ key: Config.API_KEY, term: 'Dio full concert' }, videos => this.setState({ videos, selectedVideo: videos[0] }))
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
