const Header = () => {
  return (
    <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players 1</span>
  </header>
  );
}
const Counter = () => {
  return (
    
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        HMT
      </span>

      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">10</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Player />,
  document.getElementById('root')
);
