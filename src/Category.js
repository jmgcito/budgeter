import React from "react";
import GetCategoryPercent from "./GetCategoryPercent";

function Category(props) {
  return (
    <div className="category-bubble">
      <input className="category-name" placeholder="Enter Category" />
      <p className="category-amount">
        ${(props.currMoney * props.percent * 0.01).toFixed(2)}
      </p>
      <div className="vl" />
      <div>
        <div className="percent-bubble">
          <GetCategoryPercent
            updatePercent={props.updatePercent}
            index={props.index}
            percent={props.percent}
          />
          <span>%</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
