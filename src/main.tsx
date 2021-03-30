import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './components'
import './components/styles/index.less'

ReactDOM.render(
  <React.StrictMode>
    <Button>hello</Button>
  </React.StrictMode>,
  document.getElementById('root')
)
