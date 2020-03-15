import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Rakesh", age: "32" },
      { name: "kapoor", age: "31" },
      { name: "kumar", age: "25" },
    ]
  };

  switchNameHandler = () => {
    console.log('clciked');
    this.setState(
      {
        persons: [
          { name: "Loveneet", age: "32" },
          { name: "kapoor", age: "56" },
          { name: "kumar", age: "25" },
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React APP</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I love coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
