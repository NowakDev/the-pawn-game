import React from 'react'

const Dice = props => {
  return (
    <div
      className='dice'
    >
      {props.rolledNumber}
    </div>
  )
}

export default Dice
