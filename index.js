import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/App'

ReactDOM.render(<App />, document.getElementById('app'))

// for HMR - 热更新模块
if (module.hot) {
  module.hot.accept()
}
