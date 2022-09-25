import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5
  }
  constructor(props) {
    super(props);
    this.state = { board: this.createBoard(), hasWon: false };

  }
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    const randSel = [true, false];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        row[i] = randSel[Math.floor(Math.random() * randSel.length)];
      }
      board.push(row);
    }
    return board
  }
  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {

    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[x][y] = !board[x][y];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);



    // win when every cell is turned off
    let has_Won = board.every(row => row.every(cell => !cell));
    // TODO: determine is the game has been won

    this.setState({ board: board, hasWon: has_Won });

  }



  /** Render game board or winning message. */


  render() {


    // if the game is won, just show a winning msg & render nothing else


    // TODO

    // make table board
    let tblBoard = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${j}-${i}`;
        // console.log(this.state.board[i][j]);
        row.push(<Cell isLit={this.state.board[i][j]} key={coord}
          flipCellsAroundMe={() => this.flipCellsAround(coord)}
        />)
      }
      tblBoard.push(<tr key={i}>{row}</tr>);
    }

    // TODO
    return (

      <div>
        {this.state.hasWon ?(
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            <table className="Board">
        <tbody>{tblBoard}</tbody>

            </table>
          </div>
        )}
      </div>
    )
  }

}

export default Board;
