import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = (e) => {
    // 기본 이벤트 (새로고침) 막기
    e.preventDefault();
    // e.stopPropagation(); // 이벤트 버블링 막기
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput} onChange={this.handleChange}/>
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

const mapActionToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
})

export default connect(null, mapActionToProps)(AddPlayerForm);