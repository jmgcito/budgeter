import React from "react";
import GetMoney from "./GetMoney";
import GetPercent from "./GetPercent";
import BodySection from "./BodySection";

function Header(props) {
  return (
    <div>
      <p class="margin-right">
        <strong>Monthly Income</strong>
        <br />$
        <GetMoney currMoney={props.currMoney} changeMoney={props.changeMoney} />
      </p>
      <p class="header-container">
        <strong>Expenses </strong>
        <GetPercent
          percent={props.exPercent}
          changePercent={props.changeExPercent}
        />
        % &nbsp; &nbsp; &nbsp; {/* adds three spaces */}
        <strong>Savings </strong>
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
