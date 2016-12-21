import ReactDOM from "react-dom";
import React from "react";
import { TestCmp } from "test.jsx";

import firebaseConfig from "config.firebase";

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export class ChessGame {
  constructor(root) {
    this.root = root;
  }
  init() {
    // render root react component
    const test = <TestCmp />;
    ReactDOM.render(test, this.root);
  }
}

