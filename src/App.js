import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./budgeter.css";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percents: [100],
      index: 0,
    };
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.updatePercent = this.updatePercent.bind(this);
  }

  addCategory() {
    const percents = this.state.percents;
    const lastPercent = percents[percents.length - 1];
    const avg = lastPercent / 2;
    let newArray = percents;
    newArray.pop();
    //when adding a new category, divides last percent into two smaller percents
    for (let i = 0; i < 2; i++) {
      newArray.push(avg);
    }

    this.setState({
      percents: [...newArray],
      index: this.state.index + 1,
    });
  }

  removeCategory() {
    const percents = this.state.percents;
    //when removing category, doubles percent of last index
    if (percents.length > 1) {
      percents.pop();
      let newArray = percents;
      newArray[newArray.length - 1] = newArray[newArray.length - 1] * 2;

      this.setState({
        percents: [...newArray],
        index: this.state.index - 1,
      });
    }
  }
  updatePercent(event, index) {
    let percents = this.state.percents;
    percents[index] = event.target.value;
    this.setState({
      percents: [...percents],
    });
  }

  render() {
    const categoriesArray = this.state.percents.map((percent, index) => (
      <Category
        currMoney={this.props.currMoney}
        percent={percent}
        removeCategory={this.removeCategory}
        categories={this.state.categories}
        index={index}
        updatePercent={this.updatePercent}
      />
    ));
    return (
      <section class="container move-up">
        <p>
          <h2>{this.props.title}</h2>${this.props.currMoney}
        </p>
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
      <GetCategoryPercent
        class="category-percent"
        updatePercent={props.updatePercent}
        index={props.index}
        percent={props.percent}
      />
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

class GetCategoryPercent extends React.Component {
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
        onChange={(event) => this.props.updatePercent(event, this.props.index)}
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
