// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:

// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change
// the program so that it works for any size, outputting a grid
// of the given width and height.

const drawChessBoard = size => {
  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  return board;
};

console.log(drawChessBoard(5));
