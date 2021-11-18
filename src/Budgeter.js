import React from "react";
import GetMoney from "./GetMoney";
import GetPercent from "./GetPercent";
import BodySection from "./BodySection";

function Header(props) {
  return (
    <div class="header-container">
      <h1 class="margin-right">Monthly Budgeter</h1>
      <p class="margin-right">
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

function Budgeter(props) {
  return (
    <div class="body-container">
      <div class="header card">
        <Header
          currMoney={props.currMoney}
          changeMoney={props.changeMoney}
          exPercent={props.exPercent}
          savPercent={props.savPercent}
          changeExPercent={props.changeExPercent}
          changeSavPercent={props.changeSavPercent}
        />{" "}
      </div>

      <div class="card move-down">
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
    </div>
  );
}

export default Budgeter;
