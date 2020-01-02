import React from 'react'

const Dice = ({ rolledNumber, disable, rollTheDice }) => {
  return (
    <div
      className='dice-box'
    >
      <div
        className='dice'
      >
        <img
          src={`./dice/dice-${rolledNumber}.png`}
          alt={rolledNumber}
        />
      </div>
      <button
        disabled={disable ? true : false}
        className="roll-button"
        onClick={rollTheDice}
      >
        Roll!
    </button>

    </div>
  )
}

export default Dice
