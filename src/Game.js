import React from 'react'

import PlayerSelect from './containers/PlayerSelect'
import Board from './containers/Board'

class Game extends React.Component {

  state = {
    players: [],
    gameStarted: false
  }

  gameStart = (players) => {
    this.setState({
      players,
      gameStarted: true
    })
  }

  rollTheDice = () => {
    const rolledNumber = Math.ceil(Math.random() * 6)
  }


  render() {
    const { players, gameStarted } = this.state

    return (
      <div
        className='game-container'
      >
        {
          gameStarted ?
            <div>
              <div
                className='players-info-box'
              >
                {players.map(player => (
                  <div
                    className='player-info'
                    key={player.number}
                  >
                    Player {player.number}:
                    <img
                      className='pawn-image'
                      src={`./pawns/${player.pawnColor}-pawn.png`}
                      alt={`${player.pawnColor}-pawn`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="roll-button"
                onClick={this.rollTheDice}
              >
                Roll!
                </button>
              <Board players={players} />
            </div>
            :
            <PlayerSelect gameStart={this.gameStart} />
        }
      </div>
    );
  }
}

export default Game
