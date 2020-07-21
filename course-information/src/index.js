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
  // console.log(props);
  return (
    <div>
      <Part1 part1Sub={props.parts[0].name} exercise1Sub={props.parts[0].exercises} />
      <Part2 part2Sub={props.parts[1].name} exercise2Sub={props.parts[1].exercises} />
      <Part3 part3Sub={props.parts[2].name} exercise3Sub={props.parts[2].exercises} />
    </div>
  )
};

const Total = (props) => {
  // console.log(props);
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
