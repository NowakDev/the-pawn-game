import React from 'react'

import Game from './Game'
import './App.css'


const App = (props) => {
  return (
    <div
      className={
        document.body.clientWidth < 500 || document.body.clientHeight < 700 ?
          'App-mobile'
          :
          document.body.clientWidth < 700 || document.body.clientHeight < 900 ?
            'App-tablets'
            :
            'App'
      }
    >
      <Game />
    </div>
  )
}

export default App
