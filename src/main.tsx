import React, { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './components'
import './components/styles/index.less'

const clickTest = () => {
  console.log(123)
}
ReactDOM.render(
  <React.StrictMode>
    <div style={{
      margin: '100px auto',
      textAlign: 'center'
    }}>
      <Button onClick={clickTest}>默认按钮</Button>
      <Button type="primary" onClick={clickTest}>主要按钮</Button>
      <Button type="danger" onClick={clickTest}>危险按钮</Button>
      <Button type="warning" onClick={clickTest}>警示按钮</Button>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
