import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistic = ({text}) => {
  return (
    <>      
      <td className="partTable">{text}</td>
    </>
  );
}

const Statistics = ({good, neutral, bad, total, average, percentage}) => {
  if(total !== 0){
    return (
      <tbody>
        <tr>
          <td className="headerTbl">Statistics</td>
        </tr>
        <tr>
          <Statistic text="Good" />
          <Statistic text="Neutral" />
          <Statistic text="Bad" />
          <Statistic text="Total" />
          <Statistic text="Average" />
          <Statistic text="Percentage" />
        </tr>
        <tr>
          <Statistic text={good} />
          <Statistic text={neutral} />
          <Statistic text={bad} />
          <Statistic text={total} />
          <Statistic text={average} />
          <Statistic text={percentage + "%"} />
        </tr>
      </tbody>
    );
  } else {
    return (
      <>
        <h3>Statistics</h3>
        <p>No feedback given</p>
      </>
    );
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setAverage(average + 0);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
  };


  const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }

  return (
    <div className="wrapper">
      <h3>Give Feedback</h3>

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average === 0 ? 0 : (average / total).toFixed(2)}
        percentage={good === 0 ? 0 : Math.round((good / total) * 100)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
