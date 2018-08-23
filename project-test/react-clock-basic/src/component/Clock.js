import React, {Component} from 'react';


class Clock extends Component {
  constructor() {
    super();

    this.state = {
      date :  new Date(),
      isDateVisible : true
    }

    this.toggleDate = this.toggleDate.bind(this);
  }


  // startTime 마운트
  componentDidMount() {
    this.startTime();
  }

  // timer 언마운트
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTime() {
    this.timer = setInterval(() => {
      this.setState(() => {date:new Date()});
    },1000);
  }

  toggleDate() {
    this.setState((prevState) => ({isDateVisible: !prevState.isDateVisible}))
  }

  render() {
    return(
      <div>
        <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
        <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
      </div>
    )
  }
}



export default Clock;