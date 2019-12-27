import React from 'react'

import PlayerSelect from './containers/PlayerSelect'
import Board from './containers/Board'
import Dice from './components/Dice'
import Winner from '../src/containers/Winner'
import SnackBar from './components/SnackBar'

class Game extends React.Component {

  state = {
    players: [],
    gameStarted: false,
    currentPlayer: {},
    rolledNumber: Math.ceil(Math.random() * 6),
    isWinner: {},
    snackbar: {
      innerText: '',
      open: false,
      color: 'red'
    }
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
    const { currentPlayer, snackbar } = this.state
    const rolledNumber = Math.ceil(Math.random() * 6)
    const players = this.state.players.map(player => {

      if (player.number === currentPlayer.number) {
        const rolledMeshes = player.rolledMeshes
        rolledMeshes.push(rolledNumber)

        let updatedPosition = (player.position + rolledNumber) > 20 ?
          20 - (player.position + rolledNumber - 20)
          :
          player.position + rolledNumber

        if (updatedPosition === 19) {
          updatedPosition = 11
          this.setState({
            snackbar: {
              ...snackbar,
              innerText: `Player ${currentPlayer.number} moved back to eleven.`,
              open: true
            }
          })
        }
        if (updatedPosition === 12) {
          const winner = this.state.players.find(player => player.number !== currentPlayer.number)
          this.setState({
            snackbar: {
              ...snackbar,
              innerText: `Player ${currentPlayer.number} lost !`,
              open: true
            }
          }, () => this.whoIsAWinner(winner)
          )
        }

        player = {
          ...player,
          position: updatedPosition,
          rolledMeshes
        }
      }
      return player
    })

    const secondPlayer = players.find(player => player.number !== currentPlayer.number)
    this.setState({
      players,
      currentPlayer: secondPlayer,
      rolledNumber
    }, () => {
      const isWinner = players.some(player => player.position === 20)
      if (isWinner) {
        this.setState({
          snackbar: {
            innerText: `Player ${currentPlayer.number} wins!`,
            open: true,
            color: 'green'
          }
        }, () => this.whoIsAWinner(currentPlayer)
        )
      }
    })
  }

  closeSnackBar = () => {
    this.setState({
      snackbar: {
        innerText: '',
        open: false,
        color: 'red'
      }
    })
  }

  whoIsAWinner = (winner) => {
    setTimeout(() => {
      this.setState({ isWinner: winner })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.whoIsAWinner)
  }

  playAgain = () => {
    this.setState({
      players: [],
      gameStarted: false,
      currentPlayer: {},
      rolledNumber: Math.ceil(Math.random() * 6),
      isWinner: {},
      snackbar: {
        innerText: '',
        open: false,
        color: 'red'
      }
    })
  }

  render() {
    const { players, gameStarted, currentPlayer, rolledNumber, isWinner, snackbar } = this.state

    return (
      isWinner.position ?
        <Winner
          winner={isWinner}
          onClickHandler={this.playAgain}
        />
        :
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
                  <SnackBar
                    innerText={snackbar.innerText}
                    open={snackbar.open}
                    handleClose={this.closeSnackBar}
                    color={snackbar.color}
                  />
                  <div
                    className='dice-box'
                  >
                    <button
                      disabled={snackbar.open ? true : false}
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
                    <h2 style={{ marginBottom: 0 }}>Rolls now :</h2>
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
