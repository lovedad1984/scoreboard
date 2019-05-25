import React from 'react';

import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


class App extends React.Component {
  state = {
    players: [
      {name: 'BB', score: 0, id: 1},
      {name: 'SEOL', score: 0, id: 2},
      {name: 'JANG', score: 0, id: 3},
      {name: 'BANG', score: 0, id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11} />

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} score={player.score}
                    removePlayer={this.handleRemovePlayer} changeScore={this.handleChangeScore}/>
          ))
        }
      </div>
    );
  }
}

export default App;