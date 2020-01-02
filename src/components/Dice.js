import React from 'react'

const Dice = ({ rolledNumber, disableRolling, rollTheDice }) => {
  console.log(disableRolling)
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
        type='button'
        disabled={disableRolling ? 'disabled' : null}
        className="roll-button"
        onClick={rollTheDice}
      >
        Roll!
    </button>

    </div>
  )
}

export default Dice
