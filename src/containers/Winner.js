import React from 'react'

const Winner = ({ winner, onClickHandler }) => {
  const rolledMeshes = winner.rolledMeshes
  const averageOfMeshes = (rolledMeshes.reduce((prevVal, curVal) => prevVal + curVal) / rolledMeshes.length).toFixed(0)

  return (
    <div className='winner-box'>
      <img src='./crown/winners_crown.png' alt='winners-crown' />
      <h1>The crown goes to player {winner.number}!</h1>
      <div
        className='winner-pawn'
      >
        <img
          src={`./pawns/${winner.pawnColor}-pawn.png`}
          alt={`${winner.pawnColor}-pawn`}
        />
      </div>
      <h3>Number of throws: {winner.rolledMeshes.length}</h3>
      <h3>Average of thrown meshes: {averageOfMeshes}</h3>
      <button
        className='start-button'
        onClick={onClickHandler}
      >
        play again
      </button>
    </div>
  )
}

export default Winner
