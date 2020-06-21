import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: 32},
      {name: "Manu", age: 33}
    ]
  }

  swithNameHandler = (newName) => {
    // console.log('button was clicked!');
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: "Manuel", age: 33}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 32},
        {name: event.target.value, age: 33}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.swithNameHandler.bind(this, 'Maximillian!!')}>Name Switcher</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
        {/* <Person click={()=> this.swithNameHandler('Max!!!')} changed={this.nameChangedHandler} name="john" age="28">My hobby is writting</Person> */}
      </div>
    );
  }
}

export default App;
