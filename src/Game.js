import React from 'react'

import PlayerSelect from './containers/PlayerSelect'
import Board from './containers/Board'
import Dice from './components/Dice'

class Game extends React.Component {

  state = {
    players: [],
    gameStarted: false,
    currentPlayer: 1,
    rolledNumber: Math.ceil(Math.random() * 6)
  }

  gameStart = (players) => {
    this.setState({
      players,
      gameStarted: true
    })
  }

  rollTheDice = () => {
    const { currentPlayer } = this.state
    const rolledNumber = Math.ceil(Math.random() * 6)

    if (currentPlayer === 1) {
      this.setState({
        currentPlayer: 2,
        rolledNumber
      })
    } else if (currentPlayer === 2) {
      this.setState({
        currentPlayer: 1,
        rolledNumber
      })
    }

  }


  render() {
    const { players, gameStarted, currentPlayer, rolledNumber } = this.state

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
                <div
                  className='dice-box'
                >
                  <button
                    className="roll-button"
                    onClick={this.rollTheDice}
                  >
                    Roll!
                  </button>
                  <Dice
                    rolledNumber={rolledNumber}
                  />
                </div>
                <div
                  className='moves-now'
                >
                  <h2>Moves now :</h2>
                  <div
                    className='player-info'
                  >
                    {players.map(player => (
                      <div
                        key={player.number}
                      >
                        <img
                          className={
                            player.number === currentPlayer ?
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
              </div>
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
