import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'

const API_KEY = 'AIzaSyBxJgDW2pcBTSsyraCqBvhBjeegy2H-nEU'

const App = () => (
  <div>
    <SearchBar />
  </div>
)

ReactDOM.render(<App />, document.querySelector('.app'))
