import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component {
  state = {
    players: [
      {name: 'BB', score: 0, id: 1},
      {name: 'SEOL', score: 0, id: 2},
      {name: 'JANG', score: 0, id: 3},
      {name: 'BANG', score: 0, id: 4},
    ]
  }

  maxId = 4;

  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id, delta) => {
    // console.log(id, delta);
    this.setState(prevState => {
      this.state.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return {
        players: [...prevState.players]
      }
    })
  }

  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(prevState => ({
      players: [...prevState.players, {name, score: 0, id: ++this.maxId}] // (name) shorthand property : key 와 value 가 같은 경우 하나만 사용
    }))
  }



  render() {
    return (
      <div className='scoreboard'>
        <Header players={this.state.players} />

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} score={player.score}
                    removePlayer={this.handleRemovePlayer} changeScore={this.handleChangeScore}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;