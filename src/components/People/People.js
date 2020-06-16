import React, { Component } from 'react';

import Person from './Person/Person';

class People extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps')
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[People.js] shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate')
    console.log(snapshot);
  }

  render() {
    console.log('[People.js] rendering...')
    return this.props.people.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

;

export default People;
