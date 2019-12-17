import React from 'react'

const styles = {
  pawnBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  pawn: {
    width: 100,
    height: 100,
    margin: 20,
    cursor: 'pointer',
  }
}

class PlayerSelect extends React.Component {
  state = {
    pawns: ['red', 'blue'],
    currentPlayer: 1,
    players: []
  }

  pawnSelectHandler = (pawnColor) => {
    this.setState({
      players: [
        {
          player: 1,
          pawnColor
        },
        {
          player: 2,
          pawnColor: this.state.pawns.find(pawn => pawn !== pawnColor)
        }
      ]
    })
  }

  render() {
    const { pawns, currentPlayer, players } = this.state
    return (
      players.length === 0 ?
        <div>
          <h1>Player {currentPlayer}, select a pawn:</h1>
          <div style={styles.pawnBox}>
            {
              pawns.map(pawn => (
                <div
                  key={pawn}
                  style={styles.pawn}
                  onClick={() => this.pawnSelectHandler(`${pawn}`)}
                >
                  <img
                    src={`./pawns/${pawn}-pawn.png`}
                    alt={`${pawn}-pawn.png`}
                  />
                </div>
              ))
            }
          </div>
        </div>
        :
        <div>
          <h1>Player 1: {players[0].pawnColor}</h1>
          <h1>Player 2: {players[1].pawnColor}</h1>
        </div>
    )
  }
}

export default PlayerSelect
