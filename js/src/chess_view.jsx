import React, { Component } from "react";

import { CHESS_ROWS, CHESS_COLS, PIECES } from "const";

class ChessViewCmp extends Component {
  drawCell(row, col) {
    const piece = this.props.state[row][col];
    if (piece === null) {
      return null;
    }
    return <div className={`piece piece-${piece}`} />;
  }
  render() {
    const cells = CHESS_ROWS.map((rowName, rowIndex) => {
      const colCells = CHESS_COLS.map((colName, colIndex) => {
        return (
          <div key={rowIndex + colIndex} className={`cell cell-${colName}`}>
            {this.drawCell(7 - rowIndex, colIndex)}
          </div>
        );
      });

      return (
        <div key={rowIndex} className={`row row-${rowName}`}>{colCells}</div>
      );
    });

    return (
      <div className="chess-board">
        {cells}
      </div>
    );
  }
};

export class ChessView {
  constructor(state) {
    this.view = <ChessViewCmp state={state} />;
  }
};

