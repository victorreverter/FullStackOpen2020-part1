import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part1 = (props) => {
  return(
    <p>
      {props.part1Sub} {props.exercise1Sub}
    </p>
  )
};

const Part2 = (props) => {
  return (
    <p>
      {props.part2Sub} {props.exercise2Sub}
    </p>
  )
};

const Part3 = (props) => {
  return (
    <p>
      {props.part3Sub} {props.exercise3Sub}
    </p>
  )
};


const Content = (props) => {
  return (
    <div>
      {/* <p>
        {props.part1} {props.exercise1}
      </p> */}
      <Part1 part1Sub={props.part1} exercise1Sub={props.exercise1} />
      {/* <p>
        {props.part2} {props.exercise2}
      </p> */}
      <Part2 part2Sub={props.part2} exercise2Sub={props.exercise2} />
      {/* <p>
        {props.part3} {props.exercise3}
      </p> */}
      <Part3 part3Sub={props.part3} exercise3Sub={props.exercise3} />
    </div>
  )
};
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course} />
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      <Content
        part1={part1}
        exercise1={exercises1}
        part2={part2}
        exercise2={exercises2}
        part3={part3}
        exercise3={exercises3}
      />
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
