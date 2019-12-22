import React from 'react'

const styles = {
  container: {
    display: 'flex'
  },
  pawnBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pawn: {
    width: 130,
    height: 130,
    margin: 20,
    cursor: 'pointer',
  }
}

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
          <h1>Please, select a pawn to begin:</h1>
          <div style={styles.pawnBox}>
            {
              pawns.map(pawn => (
                <div
                  key={pawn}
                  style={styles.pawn}
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
          <div style={styles.pawnBox}>
            {
              players.map(player => (
                < h1
                  key={player.number}
                  style={styles.pawnBox}
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
