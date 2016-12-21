import ReactDOM from "react-dom";

import firebase from "firebase/app";

import firebaseConfig from "config.firebase";
import { ChessData } from "chess_data";

// Initialise Firebase
const FB = firebase.initializeApp(firebaseConfig);

export class ChessGame {
  constructor(root) {
    this.root = root;

    this.game = new ChessData();
  }
  init() {
    // render root react component
    ReactDOM.render(this.game.view, this.root);
  }
}

