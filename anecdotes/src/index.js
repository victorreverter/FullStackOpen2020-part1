import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AnecdoteMostValuable = (props) => {
  if(props.currVotes === 0) {
    return (
      <p>No most voted Anecdote</p>
    )
  } else {
    return (
      <>
        <p>{props.currAnecdote}</p>
        <p>It has {props.currVotes} votes</p>
      </>
    );
  }
}


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  const [maxVotes, setMaxVotes] = useState(0);

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVotes = () => {
    const copyVotes = {...votes};
    copyVotes[selected] += 1;
    setVotes(copyVotes);

    const arr = Object.values(votes);
    console.log(arr.indexOf(Math.max(...arr)));
    setMaxVotes(arr.indexOf(Math.max(...arr)));
  }

  return (
    <div className="wrapper">
      <h3>Anecdote of the day</h3>
      <p>{props.anecdotes[selected]}</p>
      <p>It has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>

      <h3>Anecdote with most votes</h3>
      <AnecdoteMostValuable currAnecdote={props.anecdotes[maxVotes]} currVotes={votes[maxVotes]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
