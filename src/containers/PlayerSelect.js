import React from 'react'

class PlayerSelect extends React.Component {
  state = {
    pawns: ['red', 'blue'],
    players: []
  }

  pawnSelectHandler = (pawnColor) => {
    this.setState({
      players: [
        {
          number: 1,
          pawnColor,
          position: 0,
          rolledMeshes: []

        },
        {
          number: 2,
          pawnColor: this.state.pawns.find(pawn => pawn !== pawnColor),
          position: 0,
          rolledMeshes: []
        }
      ]
    })
  }

  onClickHandler = () => {
    this.props.gameStart(this.state.players)
  }

  render() {
    const { pawns, players } = this.state

    return (
      players.length === 0 ?
        <div>
          <h1 style={{ textAlign: 'center' }}>
            Please, select a pawn to begin:
          </h1>
          <div className='pawns-box'>
            {
              pawns.map(pawn => (
                <div
                  key={pawn}
                  className='pawn'
                  onClick={() => this.pawnSelectHandler(pawn)}
                >
                  <img
                    className="pawn"
                    src={`./pawns/${pawn}-pawn.png`}
                    alt={`${pawn}-pawn`}
                  />
                </div>
              ))
            }
          </div>
        </div>
        :
        <div style={{ textAlign: 'center' }}>
          <div>
            <h2>Press play to start the game.</h2>
            <h2>Player 1 starts. Hit Roll button to move forward.</h2>
            <h2>Players change after every roll.</h2>
            <h2>First player who reach the last tile wins.</h2>
            <h2>If player stop at tile twelve, he looses.</h2>
            <h2>If player stop at tile nineteen, moves back to tile eleven.</h2>
            <h1>Have fun !</h1>
          </div>
          <div className='pawns-box'>
            {
              players.map(player => (
                < h1
                  key={player.number}
                  className='pawns-box'
                >
                  Player {player.number}:
                <img
                    src={`./pawns/${player.pawnColor}-pawn.png`}
                    alt={`${player.pawnColor}-pawn`}
                  />
                </h1>
              ))
            }
          </div>
          <button
            className='start-button'
            onClick={this.onClickHandler}
          >
            Play!
          </button>
        </div >
    )
  }
}

export default PlayerSelect
