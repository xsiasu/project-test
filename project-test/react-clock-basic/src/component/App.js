import React, { Component } from 'react';
import Header from './Header';
import Clicker from './Clock';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      title : 'React Clock',
    }
  }
  render() {
    return (
      <div>
        <header title={this.state.title} />
        <Clock />
      </div>
    );
  }
}


