
import React from "react";
import "./gameTic-Tac-Toe.css";

export  class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    };
    // this.state-um chgreci vorovhetev voch cuyc tal er petq voch popoxel
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s
      ) {
        alert(s + "   " + "win");
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 4000);
      }
    }
  };

  clickHandler = (event) => {
    // data number clicked square
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      console.log(currentSquares);
      currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    } else {
      alert("hey ! is not fair");
    }
    this.isWinner();
  };  

  render() {
    return ( 
      <div className="wrapper-tic-tac">
      <h1>Game TicTacToe</h1>
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">
          <span className="element"> {this.state.squares[0]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">
          <span className="element">{this.state.squares[1]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">
          <span className="element">{this.state.squares[2]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">
          <span className="element">{this.state.squares[3]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">
          <span className="element">{this.state.squares[4]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">
          <span className="element">{this.state.squares[5]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">
          <span className="element">{this.state.squares[6]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">
          <span className="element">{this.state.squares[7]}</span>
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">
          <span className="element">{this.state.squares[8]}</span>
        </div>
      </div> 
       </div>
    );
  }
}

// export default TicTacToe;
