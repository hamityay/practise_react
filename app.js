const Header = (props) => {
  return (
    <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayer }</span>
  </header>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter
        score={ props.score }
      />
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard"
        totalPlayer={1}
      />

      {/* Player list */}
      <Player name="HMT" score={10} />
      <Player name="Nate" score={25} />
      <Player name="Darke" score={18} />
      <Player name="Sully" score={35} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
