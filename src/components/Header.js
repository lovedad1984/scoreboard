import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

export const Header = ({title, players}) => {
  // console.log(props);
  // destruct assignment 해체 할당 문법
  // const {title, players} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'Default Title',
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number
  }))
}