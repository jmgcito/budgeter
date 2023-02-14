import React from "react";

const GetCategoryPercent = (props) => {
  return (
    <input
      type="number"
      className="input-field percent"
      min={0}
      max={100}
      value={props.percent}
      onChange={(event) =>
        props.updatePercent(event, props.index, props.percent)
      }
    />
  );
};
export default GetCategoryPercent;
