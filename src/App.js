import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'sdfsfs', name: 'Max', age: 28 },
      { id: 'wgjrsd', name: 'Manu', age: 29 },
      { id: 'aogsqw', name: 'Stephanie', age: 26 }
    ],
    showPeople: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({people: people})
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people})
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow})
  }

  render() {
    let persons = null;
    let btnClass = '';

    if ( this.state.showPeople ) {
      persons = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.nid)}
              />
          })}
      </div>
      )

      btnClass = classes.Red

    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'howdy'))
  }
}

export default App;
