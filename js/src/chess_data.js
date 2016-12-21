/**
 * Handles chess data structures and moves
 * Tracks the current state of play
 * Coordinate system replaces A-H and 1-8 with 0-7 on chess board
 */

import { WHITE, CHESS_ROWS, CHESS_COLS, PIECES } from "const";

import { ChessView } from "chess_view";

const generateGameState = () => {
  return CHESS_ROWS.map((rowName, rowIndex) => {
    return CHESS_COLS.map((colName, colIndex) => {
      if (rowIndex === 0) {
        // white main pieces
        switch (colIndex) {
        case 0: return PIECES.WR1;
        case 1: return PIECES.WN1;
        case 2: return PIECES.WB1;
        case 3: return PIECES.WQ;
        case 4: return PIECES.WK;
        case 5: return PIECES.WB2;
        case 6: return PIECES.WN2;
        case 7: return PIECES.WR2;
        }
      }
      else if (rowIndex === 1) {
        // white pawns
        return PIECES.WP;
      }
      else if (rowIndex === 6) {
        // black pawns
        return PIECES.BP;
      }
      else if (rowIndex === 7) {
        // black main pieces
        switch (colIndex) {
        case 0: return PIECES.BR1;
        case 1: return PIECES.BN1;
        case 2: return PIECES.BB1;
        case 3: return PIECES.BQ;
        case 4: return PIECES.BK;
        case 5: return PIECES.BB2;
        case 6: return PIECES.BN2;
        case 7: return PIECES.BR2;
        }
      }

      return null;
    });
  });
};

export class ChessData {
  constructor() {
    this.state = generateGameState();
    this.toMove = WHITE;

    const chessView = new ChessView(this.state);
    this.view = chessView.view;
  }
}

