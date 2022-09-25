import chalk from "chalk";
import keypress from "keypress";

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
  let board = [];
  let row = [];
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

//console.log(letterToIndex("d"));

//keypress package turn on or off here
keypress(process.stdin);

process.stdin.on("keypress", function (ch, key) {
  shouldExit(key);
  if (
    key.name == "u" ||
    key.name == "d" ||
    key.name == "l" ||
    key.name == "r" ||
    key.name == "p" ||
    key.name == "e"
  ) {
    sendMessage(key);

    let lastItem = pathStorageArray.slice(-1);

    output[yCoord][xCoord] = `[ ]`;
    if (lastItem < 10) {
      xCoord = lastItem;
      yCoord = 0;
    } else {
      xCoord = parseInt(lastItem.toString().split("")[1]);
      yCoord = parseInt(lastItem.toString().split("")[0]);
    }
    output[yCoord][xCoord] = `[X]`;
    displayBoard(output);
  } else {
    console.log("Unknown command");
    console.log("enter another command");
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

function shouldExit(key) {
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }
}

function sendMessage(key) {
  switch (key.name) {
    case "u":
      console.log(`you moved to ${letterToIndex(key.name)}`);
      break;
    case "d":
      console.log(`you moved down to ${letterToIndex(key.name)}`);
      break;
    case "r":
      console.log(`you moved right to ${letterToIndex(key.name)}`);
      break;
    case "l":
      console.log(`you moved left to ${letterToIndex(key.name)}`);
      break;
    case "e":
      process.stdin.pause();
    default:
      console.log("please enter a command");
  }
}

function printPath(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 10) {
        xCoord = 0;
        yCoord = array[i];
        output[xCoord][yCoord] = chalk.bgBlue(`[X]`);
      } else {
        xCoord = parseInt(array[i].toString().split("")[0]);
        yCoord = parseInt(array[i].toString().split("")[1]);
        output[xCoord][yCoord] = chalk.bgBlue(`[X]`);
      }
    }
  }
