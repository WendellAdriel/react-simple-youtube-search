import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'
import { API_KEY } from './config/config'

const App = () => (
  <div>
    <SearchBar />
  </div>
)

ReactDOM.render(<App />, document.querySelector('.app'))
