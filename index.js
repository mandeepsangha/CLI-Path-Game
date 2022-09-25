//const chalk = require("chalk");
const keypress = require("keypress");

let displayBoard = (board) => {
  var buffer = "";
  for (var i = 0; i < board.length; i++) {
    for (var x = 0; x < board[i].length; x++) {
      buffer += board[i][x];
    }
    buffer += "\n";
  }
  console.log(buffer);
};

let createBoard = (width, height) => {
  board = [];
  row = [];
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      row.push("[ ]");
    }
    board.push(row);
    row = [];
  }
  return board;
};

let output = createBoard(10, 10);
let xCoord = 0;
let yCoord = 0;
output[xCoord][yCoord] = `[X]`;
console.log(
  "Acceptable inputs are\n-u: move the cursor upwards 1 block\n-d: move the cursor downwards 1 block\n-l: move the cursor left 1 block\n-r: move the cursor right 1 block\n-p: print the cursor path\n-e: exit the application"
);
displayBoard(output);

let position = 0;
let pathStorageArray = [position];

function letterToIndex(inputCharacter) {
  if (inputCharacter === "d") {
    if (position < 90) {
      position = position + 10;
      pathStorageArray.push(position);
      return position;
    } else {
      return position;
    }
  } else if (inputCharacter === "l") {
    if (position % 10 > 0) {
      position = position - 1;
      pathStorageArray.push(position);
      return position;
    } else {
      return position;
    }
  } else if (inputCharacter === "r") {
    if (
      position < 9 ||
      (position > 9 && position.toString().split("")[1] !== "9")
    ) {
      position = position + 1;
      pathStorageArray.push(position);
      return position;
    } else {
      return position;
    }
  } else if (inputCharacter === "p") {
    printPath(pathStorageArray);
  } else if (inputCharacter === "u") {
    if (position > 9) {
      position = position - 10;
      pathStorageArray.push(position);
      return position;
    } else {
      return position;
    }
  } else {
    ("Error message here");
  }
}

console.log(letterToIndex("d"));
