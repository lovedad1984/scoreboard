import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
  render() {
    console.log(this.props.name, ' rendered');
    const { id, score, name, changeScore, removePlayer} = this.props;
    return (
      <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={() => removePlayer(id)}>x</button>
    </span>
        <span className='player-name'>{name}</span>
        <Counter score={score} id={id} changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps);
    // 변경될 props 를 비교하여 true or false 를 리턴
    return nextProps.score !== this.props.score;
  }
}

