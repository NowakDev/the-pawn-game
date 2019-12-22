import React from 'react'

import PlayerSelect from './containers/PlayerSelect'
import Board from './containers/Board'
import Dice from './components/Dice'

class Game extends React.Component {

  state = {
    players: [],
    gameStarted: false,
    currentPlayer: {},
    rolledNumber: Math.ceil(Math.random() * 6)
  }

  gameStart = (players) => {
    const currentPlayer = players.find(player => player.number === 1)

    this.setState({
      players,
      currentPlayer,
      gameStarted: true
    })
  }

  rollTheDice = () => {
    const { currentPlayer } = this.state
    const rolledNumber = Math.ceil(Math.random() * 6)
    const players = this.state.players.map(player => {

      if (player.number === currentPlayer.number) {
        const updatedPosition = player.position + rolledNumber
        player = {
          ...player,
          position: updatedPosition
        }
      }
      return player
    })

    const secondPlayer = players.find(player => player.number !== currentPlayer.number)
    this.setState({
      players,
      currentPlayer: secondPlayer,
      rolledNumber
    })
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
              <Board
                players={players}
                currentPlayer={currentPlayer}
                rolledNumber={rolledNumber}
              />
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
              </div>
            </div>
            :
            <PlayerSelect gameStart={this.gameStart} />
        }
      </div>
    );
  }
}

export default Game
