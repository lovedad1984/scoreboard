import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}