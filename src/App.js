import React from 'react'

import Game from './Game'
import './App.css'


const App = (props) => {
  return (
    <div
      className={
        document.body.clientWidth < 500 ?
          'App-mobile'
          :
          document.body.clientWidth < 950 ?
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
