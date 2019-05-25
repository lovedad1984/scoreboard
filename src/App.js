import React from 'react';
import './App.css';
import {Header} from "./components/Header";



const Player = (props) =>
  (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0
    }
  }

  changeScore = (delta) => {
    this.setState(prevState => ({
      score: prevState.score + delta
    })) ;
  }

  // incrementScore = () => {
  //   this.setState(prevState => ({
  //     score: prevState.score + 1
  //   }))
  // }
  //
  // decrementScore = () => {
  //   this.setState(prevState => ({
  //     score: prevState.score - 1
  //   }))
  // }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ () => this.changeScore(-1)}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={ () => this.changeScore(1)}>+</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: 'BB', id: 1},
      {name: 'Yun', id: 2},
      {name: 'Bang', id: 3},
      {name: 'Jang', id: 4}
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return(
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} removePlayer={this.handleRemovePlayer} />
          ))
        }
      </div>
    );
  }
}


export default App;