import React, {Component} from 'react';
import Header from './Header';
import Clicker from './Clicker';

export default class ClickerApp extends Component {
  constructor() {
    super(); //constructor 을 만들면 super() 를 써줘야한다고 this를 초기화한다고 하는데

    this.state = {
      title : 'React Clicker'
    };
  }

  render() {
    return(
      <div>
        <Header title = {this.state.title} />
        <div className="m-5">
          <Clicker />
        </div>
      </div>
    )
  }
}