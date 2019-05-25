import React from 'react';

export const Header = (props) => {
  console.log(props);
  // destruct assignment 해체 할당 문법
  const {title, totalPlayers} = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}