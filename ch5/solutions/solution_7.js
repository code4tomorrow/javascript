const field = [
  [0, 0, 1], 
  [0, 1, 0], 
  [1, 0, 0]
];

let cowLocations = [
  [-1, -1],
  [-1, -1],
  [-1, -1]
];

let count = 0;

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    if (field[i][j] == 1) {
      cowLocations[count][0] = i;
      cowLocations[count][1] = j;
      count++;
    }

  }

}

console.log(cowLocations);
