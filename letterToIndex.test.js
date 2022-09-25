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

let pathStorageArray = [];

test("#1 user input is u", () => {
  position = 15;
  expect(letterToIndex("u")).toBe(5);
});

test("#2 user input is d", () => {
  position = 15;
  expect(letterToIndex("d")).toBe(25);
});

test("#3 user input is l", () => {
  position = 15;
  expect(letterToIndex("l")).toBe(14);
});

test("#4 user input is r", () => {
  position = 15;
  expect(letterToIndex("r")).toBe(16);
});

test("#5 user input is u on top row of grid", () => {
  position = 0;
  expect(letterToIndex("u")).toBe(0);
});

test("#7 user input is d on bottom row of grid", () => {
  position = 90;
  expect(letterToIndex("d")).toBe(90);
});

test("#7 user input is l on bottom row of grid", () => {
  position = 60;
  expect(letterToIndex("l")).toBe(60);
});

test("#6 user input is r on right most column of grid", () => {
  position = 39;
  expect(letterToIndex("r")).toBe(39);
});
