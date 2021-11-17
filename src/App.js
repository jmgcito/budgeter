import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./budgeter.css";
import Budgeter from "./Budgeter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currMoney: 600,
      exPercent: 70,
      savPercent: 30,
    };
    this.changeMoney = this.changeMoney.bind(this);
    this.changeExPercent = this.changeExPercent.bind(this);
    this.changeSavPercent = this.changeSavPercent.bind(this);
  }
  changeMoney(event) {
    this.setState({
      currMoney: event.target.value,
    });
  }
  changeExPercent(event) {
    this.setState({
      exPercent: event.target.value,
      savPercent: 100 - event.target.value,
    });
  }
  changeSavPercent(event) {
    this.setState({
      exPercent: 100 - event.target.value,
      savPercent: event.target.value,
    });
  }
  render() {
    return (
      <Budgeter
        currMoney={this.state.currMoney}
        exPercent={this.state.exPercent}
        savPercent={this.state.savPercent}
        changeMoney={this.changeMoney}
        changeExPercent={this.changeExPercent}
        changeSavPercent={this.changeSavPercent}
      />
    );
  }
}

export default App;
