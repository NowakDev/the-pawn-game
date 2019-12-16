import React from 'react'

const styles = {
  pawnBox: {
    display: 'flex',
  },
  bluePawn: {
    width: 100,
    height: 100,
    margin: 10,
    cursor: 'pointer',
    backgroundColor: 'blue'
  },
  redPawn: {
    width: 100,
    height: 100,
    margin: 10,
    cursor: 'pointer',
    backgroundColor: 'red'
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
    console.log(this.state)
    return (
      <div>
        <h1>Player {this.state.currentPlayer}, select a pawn:</h1>
        <div style={styles.pawnBox}>
          <div
            style={styles.bluePawn}
            onClick={() => this.pawnSelectHandler('blue')}
          >
            BLUE
            </div>
          <div
            style={styles.redPawn}
            onClick={() => this.pawnSelectHandler('red')}
          >
            RED
            </div>
        </div>
      </div>
    )
  }
}

export default PlayerSelect
