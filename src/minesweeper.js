class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Final Board:');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations, you won!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  //Flip Tile -- Check to see if the tile was flipped
  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped');
      return;
    }
    else if (hasSafeTiles()) {
      this._playerBoard[rowIndex][columnIndex].push('B');
    }
    else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  //Get the number of the Neighbor Bombs
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
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

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfRows) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] = 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs
    }
  }


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

print(){
  //Join the array elements with a '|' and then add a new line after
  console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
};

//Declare arrow function
static generatePlayerBoard(numberOfRows, numberOfColumns) {
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


generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  //Create empty board array
  let board = [];
  //Loop through numOfRows
  for (let i = 0; i < this._numberOfRows; i++) {
    //Represents single row added to board
    let row = [];
    //Number of empty spaces added to array must match numberOfColumns
    for (let x = 0; x < this._numberOfColumns; x++) {
      row.push(null);
    }
    //Push row into board array
    board.push(row);
  }
}

const g = new Game(3,3,3);
