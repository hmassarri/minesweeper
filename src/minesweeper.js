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


//Test output
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
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    //Generate a random column
    let randomColumnIndex = Math.floor(Math.random() *numberOfColumns);

    if(board[randomRowIndex][randomColumnIndex] !== 'B') {
      //Assign to board with a value of B
      board[randomRowIndex][randomColumnIndex] = 'B';
      //Incrememnt counter
      numberOfBombsPlaced++;
    }
  }
  return board;
}

//Get the number of the Neighbor Bombs
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  //Store pairs of offsets
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfRows) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] = 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};


//Check to see if the tile was flipped
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped');
  }
  else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex].push('B');
  }
  else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

const printBoard = board => {
  //Join the array elements with a '|' and then add a new line after
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);


console.log('Player Board:');
printBoard(generatePlayerBoard(3,3));
console.log(' ');
console.log('Bomb Board');
printBoard(generateBombBoard(3,3,3));
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);
