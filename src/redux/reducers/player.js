const playerInitialState = {
  title: 'Redux Scoreboard',
  players: [
    {name: 'BB', score: 0, id: 1},
    {name: 'SEOL', score: 0, id: 2},
    {name: 'JANG', score: 0, id: 3},
    {name: 'BANG', score: 0, id: 4},
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  return state;
}