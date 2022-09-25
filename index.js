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
