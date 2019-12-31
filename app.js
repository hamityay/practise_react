const players = [
  {
    id: 1,
    name: "Guil",
    score: 50
  },
  {
    id: 2,
    name: "Treasure",
    score: 85
  },
  {
    id: 3,
    name: "Ashley",
    score: 95
  },
  {
    id: 4,
    name: "James",
    score: 80
  }
];

const Header = (props) => {
  return (
    <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayer }</span>
  </header>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard"
        totalPlayer={ props.initialPlayers.length }
      />

      {/* Player list */}
      { props.initialPlayers.map( player =>
        <Player
          key={ player.id.toString() }
          name={ player.name }
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);
