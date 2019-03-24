//Chapter 11 - New code

//Declare arrow function
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  //Create empty board array
  let board = [];

  //Loop through numOfRows
  for (let i = 0; i < numberOfRows; i++) {

    //Represents single row added to board
    let row = [];

    //Number of empty spaces added to array must match numberOfColumns
    for (let x = 0; x < numberOfColumns; x++) {
      row.push(' ');
    }

    //Push row into board array
    board.push(row);
  }
  return board;
};

//console.log(generatePlayerBoard(3, 3));


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  //Create empty board array
  let board = [];

  //Loop through numOfRows
  for (let i = 0; i < numberOfRows; i++) {

    //Represents single row added to board
    let row = [];

    //Number of empty spaces added to array must match numberOfColumns
    for (let x = 0; x < numberOfColumns; x++) {
      row.push(null);
    }
    //Push row into board array
    board.push(row);
  }

  //Bomb counter - has the potential to place bombs on top of already existing bombs
  //Will need to fix this
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced != numberOfBombs) {
    //Generate a random row
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);

    //Generate a random column
    const randomColumnIndex = Math.floor(Math.random() *numberOfColumns);

    //Assign to board with a value of B
    board[randomRowIndex][randomColumnIndex] = 'B';

    //Incrememnt counter
    numberOfBombsPlaced++;
  }

  return board;

};

const printBoard = board => {
  //Join the array elements with a '|' and then add a new line after
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

console.log('Player Board:');
printBoard(generatePlayerBoard(3,3));
console.log(' ');
console.log('Bomb Board');
printBoard(generateBombBoard(10,10,5));
