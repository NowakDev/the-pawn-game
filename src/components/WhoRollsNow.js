import React from 'react'

const WhoRollsNow = ({ players, currentPlayer }) => {
  return (
    <div
      className='moves-now'
    >
      <h2>Rolls now :</h2>
      <div
        className='player-info'
      >
        {players.map(player => (
          <div
            key={player.number}
          >
            <h3
              className={
                player.number === currentPlayer.number ?
                  'player-number-large'
                  :
                  'player-number-small'
              }
            >
              Player {player.number}
            </h3>
            <img
              className={
                player.number === currentPlayer.number ?
                  'pawn-image-large'
                  :
                  'pawn-image-small'
              }
              src={`./pawns/${player.pawnColor}-pawn.png`}
              alt={`${player.pawnColor}-pawn`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhoRollsNow
