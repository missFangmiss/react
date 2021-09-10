import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//组件接收一些参数 props 然后通过render方法返回需要展示在屏幕上的视图层次结构
class Square extends React.Component {
    //定义某一子类构造函数时 需要调用super方法，在含有构造函数的react组件中，构造函数必须以super(props)开头
    constructor(props){
        super(props);
        this.state={
            value:null
        }
    }
    render() {
      return (
        <button className="square" onClick={()=>{this.setState({value:'x'})}}>
          {this.state.value}
        </button>
      );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  