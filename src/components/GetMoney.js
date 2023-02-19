import React from "react";

const GetMoney = (props) => {
  return (
    <input
      className="input-field"
      type="number"
      value={props.currMoney}
      onChange={props.changeMoney}
    />
  );
};
export default GetMoney;
