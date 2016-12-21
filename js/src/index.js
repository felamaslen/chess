import { ChessGame } from "chess.js";

window.onload = () => {
  document.body.removeChild(document.getElementById("loading"));

  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);
  const game = new ChessGame(root);

  game.init();
};

