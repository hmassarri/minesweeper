//Create an arrow function (function name = parameter => function code)
/*
const printBoard = board => {
  console.log('Current board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
*/

//Refactor to loop through the array
function printBoard(board) {
  console.log('Current Board: ');
  for (i = 0; i < board.length; i++) {
    console.log(board[i].join(' | '));
  }
  console.log('');
}

//Create the board array of 3 elements of 3 pairs [x][y]
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


//Print the board
printBoard(board);

//Acess first line of board and change second element to '1'
board[0][1] = '1';

//Access the third line and set the third element to 'B'
board[2][2] = 'B';

//Print the board
printBoard(board);
