const Util = require("./util");
const Grids = require("./grids");
const Board = require("./board");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const squareW = 40;
  const squareH = 40;

  const framesPerSecond = 30;

  const boardGrid = Grids.levelOne();

  const board = new Board(ctx, squareW, squareH, boardGrid);

  const drawAll = () => {
    Util.colorRect(ctx, 0, 0, canvas.width, canvas.height, "#bec4ce");
    board.draw();
  };

  const updateAll = () => {
    // moveAll();
    drawAll();
  };

  let mouseX = 0;
  let mouseY = 0;

  const updateMousePosition = e => {
    const rect = canvas.getBoundingClientRect();
    const root = document.documentElement;

    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;
  };

  canvas.addEventListener("mousemove", updateMousePosition);
  setInterval(updateAll, 1000 / framesPerSecond);
});