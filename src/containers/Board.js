import React from 'react'

class Board extends React.Component {

  state = {
    squares: [],
    players: [],
    currentPlayer: 1,
    firstPlayerPosition: 0,
    secondPlayerPosition: 0,
  }

  componentDidMount() {

    const { players } = this.props

    const squares = [
      {
        row: 1,
        col: 1,
        type: 'start'
      }
    ]

    let i = 1
    for (let row = 1; row <= 6; row++) {
      for (let col = 1; col <= 6; col++) {
        if (row === 1 && col === 1) {
          continue
        }
        if (row === 1 || row === 6 || col === 1 || col === 6) {

          const square = {
            row,
            col,
          }
          squares.push(square)
          i++
        }
      }
    }


    this.setState({
      squares,
      players: players
    })
  }

  render() {
    const { squares } = this.state

    return (
      <div>
        <div
          className="gameBoard"
        >
          {
            squares.map((square, index) => (
              <div
                className={
                  square.row === 6 && square.col === 4 ?
                    'you-loose'
                    :
                    'square'
                }
                key={index}
                style={{
                  gridRow: square.row,
                  gridColumn: square.col
                }}
              >
                {square.type}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}


export default Board
