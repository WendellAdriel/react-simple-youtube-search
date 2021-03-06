import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import debounce from 'lodash/debounce'

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

    this.videoSearch('Dio full concert')
  }

  videoSearch = debounce(term =>
    YTSearch(
      { key: Config.API_KEY, term },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    )
  , 300)

  renderVideoDetail () {
    if (!this.state.selectedVideo) {
      return <div>Loading...</div>
    }
    return <VideoDetail video={ this.state.selectedVideo } />
  }


  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={ this.videoSearch } />
        { this.renderVideoDetail() }
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
