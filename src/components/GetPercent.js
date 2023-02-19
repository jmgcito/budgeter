import React from "react";

const GetPercent = (props) => {
  return (
    <input
      type="number"
      className="input-field percent"
      min={0}
      max={100}
      value={props.percent}
      onChange={props.changePercent}
    />
  );
};

export default GetPercent;
