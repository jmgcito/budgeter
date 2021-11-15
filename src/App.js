import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./budgeter.css";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyArray: [100],
      index: 0,
    };
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  addCategory() {
    const dummyArray = this.state.dummyArray;
    const sum = dummyArray.reduce((previous, current) => previous + current);
    const avg = sum / (dummyArray.length + 1);
    const newArray = [];
    for (let i = 0; i < dummyArray.length + 1; i++) {
      newArray.push(avg);
    }
    this.setState({
      dummyArray: [...newArray],
      index: this.state.index + 1,
    });
  }

  removeCategory() {
    const dummyArray = this.state.dummyArray;
    if (dummyArray.length > 1) {
      dummyArray.pop();
      const newArray = [];
      const avg = 100 / dummyArray.length;
      for (let i = 0; i < dummyArray.length; i++) {
        newArray.push(avg);
      }

      this.setState({
        dummyArray: [...newArray],
      });
    }
  }

  render() {
    const categoriesArray = this.state.dummyArray.map((percent) => (
      <Category
        currMoney={this.props.currMoney}
        percent={percent}
        removeCategory={this.removeCategory}
        categories={this.state.categories}
        index={this.state.index}
      />
    ));
    return (
      <section class="container move-up">
        <p>
          <h2>{this.props.title}</h2>${this.props.currMoney}
        </p>
        {/* {this.state.categories} */}
        {categoriesArray}
        <div style={{ position: "relative", left: 110, bottom: 5 }}>
          <button onClick={this.addCategory}>+</button>
          <button onClick={this.removeCategory}>x</button>
        </div>
      </section>
    );
  }
}

function Header(props) {
  return (
    <div class="container">
      <h1>Monthly Budgeter</h1>
      <p>
        <strong>Current Amount of Money</strong>
        <br />$
        <GetMoney currMoney={props.currMoney} changeMoney={props.changeMoney} />
      </p>

      <p>
        <strong>Expenses</strong>{" "}
        <GetPercent
          percent={props.exPercent}
          changePercent={props.changeExPercent}
        />
        % &nbsp;
        <strong>Savings</strong>{" "}
        <GetPercent
          percent={props.savPercent}
          changePercent={props.changeSavPercent}
        />
        %
      </p>
    </div>
  );
}

function Category(props) {
  return (
    <div class="category-bubble">
      <input class="category-name" placeholder="Essentials" />
      <p class="category-amount">
        ${(props.currMoney * props.percent * 0.01).toFixed(2)}
      </p>
      <div class="vl" />
      <GetPercent class="category-percent" percent={props.percent} />
    </div>
  );
}

function Budgeter(props) {
  return (
    <div class="card">
      <Header
        currMoney={props.currMoney}
        changeMoney={props.changeMoney}
        exPercent={props.exPercent}
        savPercent={props.savPercent}
        changeExPercent={props.changeExPercent}
        changeSavPercent={props.changeSavPercent}
      />
      <hr />
      <BodySection
        currMoney={(props.currMoney * props.exPercent * 0.01).toFixed(2)}
        title={"Expenses"}
      />
      <hr />
      <BodySection
        currMoney={(props.currMoney * props.savPercent * 0.01).toFixed(2)}
        title={"Savings"}
      />
    </div>
  );
}

class GetMoney extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        class="input-field"
        type="number"
        value={this.props.currMoney}
        onChange={this.props.changeMoney}
      />
    );
  }
}

class GetPercent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="number"
        class="input-field percent"
        min={0}
        max={100}
        value={this.props.percent}
        onChange={this.props.changePercent}
      />
    );
  }
}

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
