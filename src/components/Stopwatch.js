import React from 'react';

export class Stopwatch extends React.Component {
  tickRef; // 속성
  state = {
    timer: 0,
    isRunning: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>Start</button>
        <button>Reset</button>
      </div>
    );
  }

  // Dom 이 렌더링 된 직후에 호출되는 라이프사이클
  // 주로 네트워크 호출, 3rd 라이브러리 로딩 등의 역할을 수행
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // Dom 이 파괴되기 직전에 호출되는 라이프사이클
  // 리소스 해제 등의 역할을 수행
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }

}