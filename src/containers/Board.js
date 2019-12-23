import React from 'react'

import YouLoose from '../components/YouLoose'
import MoveToEleven from '../components/MoveToEleven'

class Board extends React.Component {

  state = {
    squares: [],
    players: [],
    grid_size: 6
  }

  componentDidMount() {

    const { grid_size } = this.state

    const squares = [
      {
        row: 1,
        col: 1,
        number: 'start'
      }
    ]

    let row = 1
    let col = 2

    for (let i = 1; i < 20; i++) {

      const square = {
        row,
        col,
        number: i
      }

      if (i < grid_size - 1) {
        col++
      } else if (i < 2 * grid_size - 2) {
        row++
      } else if (i < 3 * grid_size - 3) {
        col--
      } else {
        row--
      }

      squares.push(square)
    }
    this.setState({
      squares
    })
  }

  render() {

    const { squares } = this.state
    const { players } = this.props
    const playersPositions = squares.length > 0 ?
      players.map(player => squares[player.position % squares.length])
      :
      []

    return (
      <div>
        <div
          className="gameBoard"
        >
          {
            squares.map((square, index) => (
              index === 12 ?
                <YouLoose key={index} />
                :
                index === 19 ?
                  <MoveToEleven key={index} />
                  :
                  <div
                    className='square'
                    key={index}
                    style={{
                      gridRow: square.row,
                      gridColumn: square.col
                    }}
                  >
                    {square.number}
                  </div>
            ))
          }
          {
            playersPositions.map((position, index) => (
              <div
                key={index}
                style={{
                  gridRow: position.row,
                  gridColumn: position.col
                }}
                className='pawn-on-board'
              >
                <img
                  src={`./pawns/${players[index].pawnColor}-pawn.png`}
                  alt={`${players[index].pawnColor}-pawn`}
                />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Board
