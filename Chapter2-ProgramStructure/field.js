// Modification of chessboard function that draws field of x & o based on passed height and width params

const drawField = (height, width) => {
  let board = "";

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if ((x + y) % 2 == 0) {
        board += "x ";
      } else {
        board += "o ";
      }
    }
    board += "\n";
  }

  return board;
};

console.log(drawField(8, 4));
